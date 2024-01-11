import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListMovie from '../pages/listMovie';
import Home from '../pages/Home';
import Details from '../pages/detailMovie';

import Colors from '../constant/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
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
