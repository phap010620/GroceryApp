/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import Home from './src/screens/app/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/auth/SignIn';
import AuthNavigation from './src/navigation/AuthNavigation';
import AppNavigation from './src/navigation/AppNavigation';
import Detail from './src/screens/app/Detail';
import DetailNavigation from './src/navigation/DetailNavigation';
import ItemDetail from './src/components/home/ItemDetail';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './src/redux/AuthSlice';


const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
          <Stack.Screen name="AppNavigation" component={AppNavigation} />
          <Stack.Screen name="DetailNavigation" component={DetailNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <Detail />

  );
}

const styles = StyleSheet.create({

});

export default App;
