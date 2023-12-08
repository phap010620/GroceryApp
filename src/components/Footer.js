import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../untils/Color'
import { useNavigation } from '@react-navigation/native';

const Footer = ({title,title2,click}) => {
    const navigation = useNavigation();
    const handleSignIn = () => {
        navigation.navigate("SignUp")
    }
    const handleSignUp = () => {
        navigation.navigate("SignIn")
    }
    const handleForgot = () => {
        if(click === "SignIn"){
            handleSignIn()
        }else if(click === "SignUp"){
            handleSignUp()
        }
    }
    
        return (
        <View style={styles.container}>
            <Text style={styles.text1}>{title}</Text>
            <TouchableOpacity onPress={handleForgot} >
                <Text style={styles.text2}>{title2}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text1: {
        fontSize: 16,
        color: color.primary,
    },
    text2:{
        fontSize: 16,
        fontWeight: '700',
        color: color.primary,
        marginStart:10,
    }
})
