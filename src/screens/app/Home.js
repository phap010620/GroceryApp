import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import Search from '../../components/home/Search'
import { categories } from '../../data/categories'
import CategoryBox from '../../components/home/CategoryBox'
import Product from '../../components/home/CategoryBox2'
import { products } from '../../data/products'
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {


  const navigate = useNavigation();
  const [selectItem, setselectItem] = useState();
  const [filterProducts, setfilterProducts] = useState();
  const [keyword, setkeyword] = useState();
  
  useEffect(() => {
    if(selectItem && !keyword){
      const update = (products.filter((products) => products.category === selectItem) )
      setfilterProducts(update);
    }else if(selectItem && keyword){
      const update = (products.filter((products) => products.category === selectItem && products?.title?.toLowerCase().includes(keyword?.toLowerCase())) );
      setfilterProducts(update);
    }else if(!selectItem && keyword){
      const update = (products.filter((products) => products?.title?.toLowerCase().includes(keyword?.toLowerCase())) );
      setfilterProducts(update);
    }
    else{
      setfilterProducts(products)
    }

  }, [selectItem,keyword]);

  const renderItem = ({ item, index }) => {
    return (
      <CategoryBox
        onPress={() => setselectItem(item?.id)}
        isSelected = {selectItem === item?.id}
        title={item?.title}
        image={item.image} />
    )
  }
  const renderItem2 = ({ item }) => {
    const gotoDetail = (product) => {
      //navigation vào trong stack DetailNavigation
      navigation.navigate('DetailNavigation', { screen: 'item', params : product })
    }
    return (
      <Product onPress={ () => gotoDetail(item)} {...item} />
    )
  }

  return (
    <View style={styles.container}>
      <Search onSearch={setkeyword} keyword={keyword} showSearch title="Find All You Need" />
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={categories} renderItem={renderItem}
        keyExtractor={(item, index) => String(index)} />
      <FlatList numColumns={2}
        showsVerticalScrollIndicator={false}
        data={filterProducts}
        renderItem={renderItem2}
        ListFooterComponent={<View style={{ height: 300 }}></View>}
        keyExtractor={(item) => String(item.id)} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  itemContainer: {
    width: 100,
    height: 80,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginRight: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  container: {
    padding: 20,

  }
})