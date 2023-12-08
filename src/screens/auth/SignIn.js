import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Line from '../../components/Line'
import { color } from '../../untils/Color'
import Footer from '../../components/Footer'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Title Title="Sign In" />
      <View style={{ marginTop: 70 }}>
        <TextInput placehoder="example@gmail.com" label="Name" />
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput placehoder="**********" label="Password" isPassword={true} />
      </View>
      <Button title="Sign In" />
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