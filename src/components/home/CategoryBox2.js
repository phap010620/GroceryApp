import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { categories } from '../../data/categories'

const Product = ({ image, title, price , onPress }) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.text2}>{title}</Text>
            <Text style={styles.text}>{price}</Text>
        </TouchableOpacity>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        marginStart: 10,
    },
    image: {
        width: 167,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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