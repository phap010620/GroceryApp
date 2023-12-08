import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({ title, subtitle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.img} source={require('../assets/icons/back3.png')} />
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container1: {
        marginLeft: 25,
    },
    subtitle: {
        fontSize: 16,
        color: '#8D9BB5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F63AC',
        bottom: 3,
    },
    container: {
        borderRadius: 10,   
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 360,
        height: 80,
        alignItems: 'center',
        //link lấy bóng cho ảnh : https://10015.io/tools/react-native-shadow-generator
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    img: {
        width: 11,
        height: 22,
        marginTop: 10,
        transform: [{ rotate: '180deg' }], //xoay ảnh
        marginRight: 20,
    },
})