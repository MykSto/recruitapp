import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import AuthLoadingScreen from '../screens/Authorize';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ Start: StartScreen });
const AppStack = createStackNavigator({ MainTabNavigator });
const AppLogin = createStackNavigator({ Login: LoginScreen})

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  Main: MainTabNavigator,
  Login: AppLogin
},
{
  initialRouteName: 'Auth'
}
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
