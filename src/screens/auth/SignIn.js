import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Line from '../../components/Line'
import { color } from '../../untils/Color'
import Footer from '../../components/Footer'
import AxiosInstance from '../../helpers/AxiosInstance'

const SignIn = ({navigation}) => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");
  const handleSignIn = async () => {
    try {
      const response = await AxiosInstance().post('user/login', {
        email,
        password
      });
      console.log(response ,"response");
      settoken(response.token);
      console.log("login success");
      navigation.navigate("AppNavigation" , {screen: "Home"});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Title Title="Sign In" />
      <View style={{ marginTop: 70 }}>
        <TextInput value={email} onChangeText={setemail} placehoder="example@gmail.com" label="Name" />
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput value={password} onChangeText={setpassword} placehoder="**********" label="Password" isPassword={true} />
      </View>
      <Button onPress={handleSignIn} title="Sign In" />
      <View style={styles.line}>
        <Line />
        <Text style={styles.text}>Or sign in with</Text>
        <Line />
      </View>


      {/* button login */}

      <Footer title="Don't have an account?" title2=" Sign Up" click="SignIn" />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: color.primary,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  container: {
    padding: 30
  },
})