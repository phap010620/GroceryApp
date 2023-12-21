import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/app/Home';
import Favourite from '../screens/app/Favourite';
import Profile from '../screens/app/Profile';
import { color } from '../untils/Color';
import Settings from '../screens/app/Settings';
import { createStackNavigator } from '@react-navigation/stack';
import MyListings from '../screens/app/MyListings';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MyListings" component={MyListings} />
    </Stack.Navigator>
  )
}

const AppNavigation = () => {


  
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
  
          if (route.name === 'Home') {
            icon = focused
              ? require('../assets/icons/home_active.png')
              : require('../assets/icons/home.png');
          } else if (route.name === 'HomeStack') {
            icon = focused
              ? require('../assets/icons/profile_active.png')
              : require('../assets/icons/profile.png');
          } else if (route.name === 'Favorite') {
            icon = focused
              ? require('../assets/icons/bookmark_active.png')
              : require('../assets/icons/bookmark.png');
          }
  
          // You can return any component that you like here!
          return <Image style={{ width: 24, height: 24 }} source={icon} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      })} >
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen name="Favorite" component={Favourite} />
        <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})