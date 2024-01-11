import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Colors from '../constant/Colors';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        // Add navigation logic or other actions here upon successful login
        // navigation.navigate('Home');
      })
      .catch(error => {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => console.log('Back button pressed')}
          style={styles.headerHead}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6423/6423874.png',
            }}
            style={[styles.backIcon, {tintColor: Colors.textColorWhite}]}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading1}>Welcome back!</Text>
          <Text style={styles.description}>Please login to continue.</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor={Colors.textColorGray}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={Colors.textColorGray}
              secureTextEntry={true}
              selectionColor={Colors.textColorGray}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => console.log('Forgot password pressed')}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  headerHead: {
    position: 'absolute',
    left: 0,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  title: {
    color: Colors.textColorWhite,
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  heading1: {
    textAlign: 'center',
    color: Colors.textColorWhite,
    fontSize: 28,
    // fontWeight: 600,
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    color: Colors.textColorWhiteGray,
    fontSize: 16,
  },
  formContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    width: 75,
    paddingHorizontal: 3,
    backgroundColor: Colors.primaryDark,
    transform: [{translateX: 15}, {translateY: 16}],
    color: Colors.textColorWhiteGray,
    marginBottom: 8,
    zIndex: 999,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.primarySoft,
    borderRadius: 24,
    padding: 12,
    paddingLeft: 20,
    color: Colors.textColorGray,
  },
  loginButton: {
    backgroundColor: Colors.primaryBlue,
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: Colors.textColorWhite,
    fontSize: 16,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgot: {
    color: Colors.primaryBlue,
  },
});

export default App;
