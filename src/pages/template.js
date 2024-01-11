import React, { useState, useRef, useEffect } from 'react';
import {TextInput, View, Image, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../constant/Colors';

const App = () => {

  const [username, setUsername] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
});

export default App;
