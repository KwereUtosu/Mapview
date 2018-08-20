import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeMap from './HomeMap'
import BikeScreen from './tabnavigator/BikeScreen'
import CarScreen from './tabnavigator/CarScreen'
import TruckScreen from './tabnavigator/TruckScreen'
//import HomeScreen from './HomeScreen'

import {Icon, Container, Left, Button, Content, Header} from 'native-base'


export default HomeScreenTabNavigator = new TabNavigator({
  HomeMap: {
      screen: HomeMap,
            navigationOptions: {
                title: "Home",
                tabBarIcon: <Ionicons name="ios-home" size={30} />
              }
    },
    BikeScreen: {
        screen: BikeScreen,
        navigationOptions: {
            title: "Bikes",
            tabBarIcon: <Ionicons name="ios-bicycle" size={30} />
          }
      },
      CarScreen: {
        screen: CarScreen,
        navigationOptions: {
            title: "Cars",
            tabBarIcon: <Ionicons name="ios-car" size={30} />
          }
      },
      TruckScreen: {
        screen: TruckScreen,
        navigationOptions: {
            title: "Trucks",
            tabBarIcon: <Ionicons name="ios-bus" size={30} />
          }
      },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 5,
  }
});