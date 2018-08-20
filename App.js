import React from 'react';
import { StyleSheet, Text, View,TextInput, Image,ImageBackground, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from './app/tools/OurButton';

import {StackNavigator} from 'react-navigation'
import WelcomeScreen from './app/screens/WelcomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import SignUpScreen from './app/screens/SignUpScreen'
import DrawerNavigator from './app/screens/DrawerNavigator'

import {Icon, Container, Left, Button, Content, Header} from 'native-base'

export default class App extends React.Component {
  state = {
    username: 'Jkwery',
    password: 'Kweerre'
  }

  onButtonPressed() {
    alert('Our cool Button');
  }

  render() {
    return (
        <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = new StackNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  LoginScreen:{screen:LoginScreen},
  SignUpScreen:{screen:SignUpScreen},  
  DrawerNavigator:{
    screen:DrawerNavigator,
    navigationOptions: {
      header: null,    
    }
}
},{
  navigationOptions:{
    gesturesEnabled: false
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});
