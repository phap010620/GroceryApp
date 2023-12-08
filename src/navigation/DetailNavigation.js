import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemDetail from '../components/home/ItemDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();
const DetailNavigation = () => {
  return (
    
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="item" component={ItemDetail} />
        </Stack.Navigator>

  )
}

export default DetailNavigation

const styles = StyleSheet.create({})