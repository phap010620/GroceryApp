import { Image, StyleSheet, Text, TouchableOpacity, Touchable, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { color } from '../../untils/Color'

const Splash = ({navigation}) => {
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            
                <Image style={styles.img} source={require('../../assets/images/splash.png')} />
            
            <Text style={styles.text}>You'll Find</Text>
            <Text style={styles.text2}>All you need</Text>
            <Text style={styles.text3}>Here!</Text>
            <Button title="Sign up" />
            <TouchableOpacity onPress={handleSignIn} style={styles.footer}>
                <Text style={styles.text4}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    text4: {
        color: color.primary,
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
    },
    footer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    text3: {
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: '700',
        color: color.black,
    },
    text2: {
        fontSize: 40,
        fontWeight: '700',
        alignSelf: 'center',
        color: color.orange,
        textDecorationLine: 'underline',
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 20,
        color: color.black,
    },
    img: {
        width: 357,
        height: 209,
        marginTop: 160,
        alignSelf: 'center',
    },
    container: {

    },
})