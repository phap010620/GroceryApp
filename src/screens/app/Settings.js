import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Search from '../../components/home/Search'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Search title="Settings"  />
      <View>
        <Text>Personal Information</Text>
        <Image style={styles.img} source={require('../../assets/icons/edit.png')} /> 
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  img:{

  }
  ,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:24  
  },
})