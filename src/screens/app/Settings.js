import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../../components/home/Search'
import ListItem2 from '../../components/ListItem2'
import ListItem3 from '../../components/home/ListItem3'
const Settings = () => {
  return (
    <View style={styles.container}>
      <Search title="Settings" />
      <View style={styles.container1}>
        <Text style={styles.text}>Personal Information</Text>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../../assets/icons/edit.png')} />
        </TouchableOpacity>
      </View>
      <ListItem2 title="Name" fullName="Bruno Pham" />
      <ListItem2 title="Email" fullName="bruno203@gmail.com" />
      <Text style={styles.text2}>Help Center</Text>
      <View style={styles.footer}>
        <ListItem3 title="Terms of Service" />
        <ListItem3 title="Contact Us" />
        <ListItem3 title="Privacy & Terms" />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
  },
  text2: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  img: {
    width: 24,
    height: 24,
    marginTop: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24
  },
})