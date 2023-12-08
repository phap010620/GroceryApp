import { Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Title from '../../components/Title'
import { color } from '../../untils/Color'
import TextInput1 from '../../components/TextInput'
import Button from '../../components/Button'
import Line from '../../components/Line'
import Footer from '../../components/Footer'

const SignUp = ({navigation}) => {
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }
    return (
        <View style={styles.container}>
            <Title Title="Sign Up" />
            <View style={styles.textInput1}>
                <TextInput1 placehoder="John Doe" label="Name" />
            </View>
            <View style={styles.textInput2}>
                <TextInput1 placehoder="example@gmail.com" label="E-mail" />
            </View>
            <View style={styles.textInput2}>
                <TextInput1 isPassword={true} placehoder="**********" label="Password" />
            </View>
            <Button title="Sign Up" />
            <View style={styles.line}>
                <Line />
                <Text style={styles.text1}>Or sign up with</Text>
                <Line />
            </View>
            
            {/* button login */}
            <View>
                <Footer click="SignUp" title= "Already have an account?" title2=" Sign In"/>
            </View>
            
            
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    text1:{
        fontSize: 16,
        fontWeight: '700',
        color: color.primary,
    },
    line:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    textInput2: {
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: color.primary,
    },
    textInput1: {
        marginTop: 50,
    },
    container: {
        padding: 30
    },
})