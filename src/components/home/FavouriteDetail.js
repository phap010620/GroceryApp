import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../../untils/Color'



const FavouriteItem = ({ title, price, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View >
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View>
        <Text style={styles.text2}>{title}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
      <TouchableOpacity style={{ position: 'absolute', right: 24, top: 10 }}>
        <Image style={styles.img1} source={require('../../assets/icons/delete.png')} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default FavouriteItem

const styles = StyleSheet.create({
  img1: {
    width: 30,
    height: 30
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 15,
    borderBottomColor: color.blurGrey ,
    borderBottomWidth: 1,
    paddingBottom: 18,
    
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  text2: {
    fontSize: 16,
    fontWeight: '300',
    padding: 5,
    color: '#000',
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    padding: 5,
    color: '#000',
    marginRight: 8,
  },
  containerImage: {
    width: 157,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
  },
})