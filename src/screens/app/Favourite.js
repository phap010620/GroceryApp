import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { products } from '../../data/products'
import Product from '../../components/home/CategoryBox2'
import FavouriteItem from '../../components/home/FavouriteDetail'
import Search from '../../components/home/Search'
import ItemDetail from '../../components/home/ItemDetail'

const Favourite = ({navigation}) => {
  const renderItem = ({ item }) => {
    const gotoDetail = (product) => {
      //navigation vào trong stack DetailNavigation
      navigation.navigate('DetailNavigation', { screen: 'item', params : product })
    }
    return (
      <FavouriteItem onPress={() => gotoDetail(item)} {...item} />
    )
  }
  return (
    <View style={styles.container}>
      <Search title="Favourite" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
        />
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})