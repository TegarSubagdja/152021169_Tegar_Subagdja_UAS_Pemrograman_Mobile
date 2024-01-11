import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListMovie from '../pages/listMovie';
import Home from '../pages/Home';
import Details from '../pages/detailMovie';

import Login from '../pages/login';
import Register from '../pages/Register';

import Colors from '../constant/Colors';
import Splash from '../pages/splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();

const loginPage = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <LoginStack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
  </LoginStack.Navigator>
);

const bottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.secondaryOrange,
        borderColor: Colors.primaryDark,
        height: 60,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: () => <Image source={require('../assets/icon/Home.png')} />,
      }}
    />
    <Tab.Screen
      name="ListMovie"
      component={ListMovie}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Image source={require('../assets/icon/Search.png')} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={loginPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={bottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
