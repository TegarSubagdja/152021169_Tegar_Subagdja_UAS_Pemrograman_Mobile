import React, {useState, useRef, useEffect} from 'react';
import {TextInput, View, Image, SafeAreaView, StyleSheet} from 'react-native';
import Colors from './constant/Colors';
import ListMovie from './pages/listMovie';
import Details from './pages/detailMovie';
import Login from './pages/login';
import Splash from './pages/splash';
import Home from './pages/Home';
import Register from './pages/Register';

import {NavigationContainer} from '@react-navigation/native';
import Route from './routes/route';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryDark,
    flex: 1,
  },
});

export default App;
