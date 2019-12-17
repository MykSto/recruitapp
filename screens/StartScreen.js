import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
// import LoginScreen from '../screens/LoginScreen'
import { Platform } from 'react-native';
import logoImg from '../assets/images/st_logo.png';
import { NunitoText } from '../components/NunitoStyleText'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MARGIN = 40;

export default function StartScreen(props) {
  config
  const { navigate } = props.navigation;

  // const userToken = AsyncStorage.getItem('userToken');
  // console.log("start", userToken);

  return (
    <View style={styles.container}>
              <Image source={logoImg} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
      <NunitoText style={styles.text}>
         Login 
        </NunitoText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigate('Register')}>
      <NunitoText style={styles.text}>
      Register
      </NunitoText>
      </TouchableOpacity>
    </View>
  );
  
}

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

StartScreen.navigationOptions = {
  // header: null,
  headerStyle: {
    backgroundColor: '#f4511e',
    height: 10
  }
};

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#689AB6',
    borderRadius: 5,
    width: 203,
    height: 40,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  text: {
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF'
  },
  image: {
    width: 200,
    height: 200,
    margin: 0 | "auto"
    // top: "'55%"
  },
});