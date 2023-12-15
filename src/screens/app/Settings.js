import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import Search from '../../components/home/Search'
import ListItem2 from '../../components/ListItem2'
import ListItem3 from '../../components/home/ListItem3'
import Button from '../../components/Button'


const Settings = () => {
  const [onPress, setonPress] = useState(false);
  const [values, setvalues] = useState({name: 'Bruno Pham', email: 'bruno203@gmail.com'});
const onChangeText = (key,value) => {
    setvalues({...values, [key]: value});
  }
  const onEdit = () => {
    setonPress(true);
  }
  const onSave = () => {
    setonPress(false);
  }
  const onLink = () => {
    Linking.openURL('https://www.google.com/')
  }
  console.log(values);
  return (
    <View style={styles.container}>
      <Search back title="Settings" />
      <View style={styles.container1}>
        <Text style={styles.text}>Personal Information</Text>
        <TouchableOpacity onPress={onEdit}>
          <Image style={styles.img} source={require('../../assets/icons/edit.png')} />
        </TouchableOpacity>
      </View>
      <ListItem2 title="Name" onChangeText={(values) => onChangeText("name", values) } value={values.name} editable={onPress} />
      <ListItem2 title="Email" onChangeText={(values) => onChangeText("email",values)} value={values.email} editable={onPress} />
      {onPress ? <Button  title="Save" onPress={onSave} /> : null}
      <Text style={styles.text2}>Help Center</Text>
      <View style={styles.footer}>
        <ListItem3 onPress={onLink} title="FAQ" />
        <ListItem3 onPress={onLink} title="Contact Us" />
        <ListItem3 onPress={onLink} title="Privacy & Terms" />
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