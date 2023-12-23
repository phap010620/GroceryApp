import { Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Title from '../../components/Title'
import { color } from '../../untils/Color'
import TextInput1 from '../../components/TextInput'
import Button from '../../components/Button'
import Line from '../../components/Line'
import Footer from '../../components/Footer'
import AxiosInstance from '../../helpers/AxiosInstance'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/authAction'

const SignUp = ({navigation}) => {
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const dispatch = useDispatch();
    const handleSignIn = () => {
        navigation.navigate('SignIn')
    }
    const handleSignUp = async () => {
        const user = { fullName, email, password, confirmPassword };
        try {
            const response = await AxiosInstance().post('user/register', {
                fullName,
                email,
                password,
                confirmPassword
            });
            console.log(response, "response");
            console.log("Register success");
            navigation.navigate( "SignIn");
            dispatch(login(user));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Title Title="Sign Up" />
            <View style={styles.textInput1}>
                <TextInput1 value={fullName} onChangeText={setfullName} placehoder="John Doe" label="Name" />
            </View>
            <View style={styles.textInput2}>
                <TextInput1 value={email} onChangeText={setemail} placehoder="example@gmail.com" label="E-mail" />
            </View>
            <View style={styles.textInput2}>
                <TextInput1 value={password} onChangeText={setpassword} isPassword={true} placehoder="**********" label="Password" />
            </View>
            <View style={styles.textInput2}>
                <TextInput1 value={confirmPassword} onChangeText={setconfirmPassword} isPassword={true} placehoder="**********" label="Confirm Password" />
            </View>
            <Button onPress={handleSignUp} title="Sign Up" />
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