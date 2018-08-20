import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

import {DrawerNavigator, StackNavigator,DrawerItems} from 'react-navigation'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import PromoScreen from './PromoScreen'
import SettingScreen from './SettingScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreenTabNavigator from './HomeScreenTabNavigator'
import {Icon, Container, Left, Button,Body, Content, Header} from 'native-base'


const InnerStackNavigator = new StackNavigator({
  TabNavigator: {screen: HomeScreenTabNavigator,
    navigationOptions: {
      header: null,    
    }
  }
})

const CustomerDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height:200}}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={require('..//images/pronto.jpg')}/>
      </Body>
    </Header>

     <Content>
       <DrawerItems {...props}/>
     </Content>
  </Container>
)

const AppDrawerNavigator = new DrawerNavigator({
    Home: {screen: InnerStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Ionicons name="ios-home" size={22} />),
      }
    },
    Profile: {screen: ProfileScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Ionicons name="ios-folder" size={22} />),
      }
    },
    Promotions: {screen: PromoScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Ionicons name="ios-trophy" size={22} />),
      }
    },
    Settings: {screen: SettingScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Ionicons name="ios-settings" size={22} />),
      }
    } 
},
{
initialRouteName: 'Home',
contentComponent:CustomerDrawerContentComponent,
drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',  
})

export default AppDrawerNavigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 5,
  },
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});