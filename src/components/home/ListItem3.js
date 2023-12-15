import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../../untils/Color'

const ListItem3 = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.img} source={require('../../assets/icons/back3.png')} />
    </TouchableOpacity>
  )
}

export default ListItem3

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "600",
        color: color.primary,
        marginLeft: 25,
    },
    img: {
        width: 11,
        height: 22,
        marginTop: 10,
        transform: [{ rotate: '180deg' }], //xoay ảnh
        marginRight: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 360,
        height: 65,
        alignItems: 'center',
        //link lấy bóng cho ảnh : https://10015.io/tools/react-native-shadow-generator
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
        borderRadius: 10,
        marginTop: 15,
    },
})