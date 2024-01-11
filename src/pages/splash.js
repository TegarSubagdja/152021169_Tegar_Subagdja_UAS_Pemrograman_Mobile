import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../constant/Colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3658/3658959.png',
        }}
        style={{ width: 100, height: 100 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    padding: 8,
  },
});

export default App;
