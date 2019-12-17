import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import StartScreen from '../screens/StartScreen';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
// import AuthLoadingScreen from '../screens/AuthLoadingScreen';

// const AuthStack = createStackNavigator({ StartScreen: StartScreen });

const AuthStack = createStackNavigator({ Start: StartScreen });
// const AppStack = createStackNavigator({ MainTabNavigator });
const AppLogin = createStackNavigator({ Login: LoginScreen})

export default createAppContainer(
  
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Auth: AuthStack,
    Main: MainTabNavigator,
    Login: AppLogin
  },
  {
    initialRouteName: 'Auth'
  }
  ));

  // switchNavigator.path = '';

  // export default createBrowserApp(switchNavigator, { history: 'hash' });
