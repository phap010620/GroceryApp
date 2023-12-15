import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../../components/home/Search'
import { color } from '../../untils/Color'
import ListItem from '../../components/ListItem'
import Button from '../../components/Button'


const Profile = ({navigation}) => {
  const handleSetting = () => {
    navigation.navigate('Settings');
  }
  const handleAddListing = () => {
    navigation.navigate('DetailNavigation', {screen: 'newsList'});
  }
  const number = 10;
  return (
    <View style={styles.container}>
      <Search title="Profile" showLogout />
      <Text style={styles.userName}>Elina Hovakimyan</Text>
      <Text style={styles.email}>hello@gmail.com</Text>
      <View style={styles.list}>
        <ListItem height={80} title="My Orders" subtitle={`Already have ${number} orders`} />
        <ListItem height={80}  onPress={handleSetting} title="Settings" subtitle="Account, FAQ, Contact" />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button onPress={handleAddListing} title="Add a new listing" color={color.red} textColor={color.white} />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
  },
  email: {
    fontSize: 16,
    marginTop: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    color: color.black,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 24,
  },
})