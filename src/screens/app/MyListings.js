import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Search from '../../components/home/Search'
import { products } from '../../data/products'
import FavouriteItem2 from '../../components/home/FavouriteDetail2'

const MyListings = ({navigation}) => {
    const renderItem = ({ item }) => {
        const gotoDetail = (product) => {
          //navigation vào trong stack DetailNavigation
          navigation.navigate('DetailNavigation', { screen: 'item', params : product })
        }
        return (
          <FavouriteItem2 onPress={() => gotoDetail(item)} {...item} />
        )
      }
  return (
    <View style={styles.container}>
      <Search back title="My Listings" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
        style={{ marginTop: 20 }}
        />
    </View>
  )
}

export default MyListings

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15
      },
})