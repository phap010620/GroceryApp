import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../untils/Color'

const ListItem2 = ({title, fullName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.fullName}>{fullName}</Text>   
    </View>
  )
}

export default ListItem2

const styles = StyleSheet.create({
    fullName: {
        fontSize: 20,
        fontWeight: "600",
        color: color.primary,
    },
    title: {
        fontSize: 16,
        color: color.gray,
    },
    container: {
        padding: 16,
        width: 360,
        height: 80,
        backgroundColor: color.white,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
        marginTop: 20,
        borderRadius: 10,
    },
})