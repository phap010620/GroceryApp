/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import Home from './src/screens/app/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/auth/SignIn';
import AuthNavigation from './src/navigation/AuthNavigation';
import AppNavigation from './src/navigation/AppNavigation';
import Detail from './src/screens/app/Detail';
import DetailNavigation from './src/navigation/DetailNavigation';
import ItemDetail from './src/components/home/ItemDetail';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="AppNavigation" component={AppNavigation} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Detail />
    
  );
}

const styles = StyleSheet.create({

});

export default App;
