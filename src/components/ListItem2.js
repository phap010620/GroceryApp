import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { color } from '../untils/Color'


const ListItem2 = ({title, value, onChangeText, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.fullName} />
    </View>
  )
}

export default ListItem2

const styles = StyleSheet.create({
    fullName: {
        fontSize: 19,
        fontWeight: "600",
        color: color.primary,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        color: color.gray,
    },
    container: {
        padding: 15,
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