import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../untils/Color'

const Button = ({title,onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default React.memo(Button);

const styles = StyleSheet.create({
    text: {
        fontSize:18,
        fontWeight:'700',
        color:color.white,
        alignSelf:'center',
        marginTop: 15,
    },
    btn:{
        backgroundColor: color.primary,
        width:340,
        height:60,
        borderRadius:10,
        alignSelf:'center',
        marginTop: 40,
    }
})