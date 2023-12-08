import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { color } from '../../untils/Color'

const CategoryBox = ({ title, image,onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container]}>
            <View style={[styles.containerImage, isSelected ? {backgroundColor: color.black} : {}]}>
                <Image style={styles.image} source={ image} />
            </View>
            <Text style={[styles.text,isSelected ? {color:color.black} : {}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',   
        borderRadius: 10,
        
    },
    text : {
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        color: color.primary,
        marginRight: 8,

        
    },
    containerImage : {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8e8e8',
        
    },
    container : {
        
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
        
    }
})