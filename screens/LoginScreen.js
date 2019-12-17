import React, { useState } from 'react';
import { View, Text, TextInput, Button, AsyncStorage, StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default function LoginScreen(props) {

    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    console.log("nuejo")

    return (
        <View style={styles.container}>
            
            <Text>Username</Text>
            <TextInput
                onChangeText={(username) => setUserName(username)}
                value={userName}
            >
            </TextInput>

            <Text>Password</Text>
            <TextInput
                onChangeText={(password) => setPassword(password)}
                value={password}
            >
            </TextInput>

            <Button
                title="Login"
                onPress={() => signIn()}
            />
        </View>
    );
    async function signIn() {

        await AsyncStorage.setItem('userToken', 'abc');

        console.log("siaip kazkki asdta ", userName);
        console.log(password);
        props.navigation.navigate('Main');

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 300,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F035E0',
      height: MARGIN,
      borderRadius: 20,
      zIndex: 100,
    },
    circle: {
      height: MARGIN,
      width: MARGIN,
      marginTop: -MARGIN,
      borderWidth: 1,
      borderColor: '#F035E0',
      borderRadius: 100,
      alignSelf: 'center',
      zIndex: 99,
      backgroundColor: '#F035E0',
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    image: {
      width: 24,
      height: 24,
    },
  });