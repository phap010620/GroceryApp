import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../../components/home/Search'
import { color } from '../../untils/Color'
import ListItem from '../../components/ListItem'
import Button from '../../components/Button'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/AuthSlice'

const Profile = ({navigation}) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSetting = () => {
    navigation.navigate('Settings');
  }
  const handleMyListings = () => {
    navigation.navigate('MyListings');
  }
  const handleAddListing = () => {
    navigation.navigate('DetailNavigation', {screen: 'newsList'});
  }
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('SignIn');
  }
  const number = 10;
  return (
    <View style={styles.container}>
      <Search title="Profile" showLogout />
      <Text style={styles.userName}>Elina Hovakimyan</Text>
      <Text style={styles.email}>hello@gmail.com</Text>
      <View style={styles.list}>
        <ListItem height={80} onPress={handleMyListings} title="My Listings" subtitle={`Already have ${number} orders`} />
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