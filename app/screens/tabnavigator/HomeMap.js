import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '...///tools/OurButton';
//import { Form } from '...///components/Form';

import {Icon, Container, Left, Button, Content, Header} from 'native-base'

export class HomeMap extends React.Component {

  state = {
    username: 'Jkwery',
    password: 'Kweerre'
  }

  onButtonPressed() {
    alert('Riders Are Not Avaliable Right Now');
  }

  // static navigationOptions = {
  //   drawerIcon:(
  //     <Image source={require('.')/>
  //   )
  // }

  render() {
    return (
          <Container>
            <Header>
              <Left>
                <Icon name="ios-menu" onPress={() =>
                  this .props.navigation.navigate('DrawerOpen')}/>
              </Left>
            </Header>

            <Content contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <OurButton color='#ff0000' onPress={() => this.onButtonPressed()}>
               <Text style={{fontSize: 20, color: 'white'}}>Click Me To Get A Ride!</Text>
             </OurButton>              
             <Content contentContainerStyle={{
                flex: 1,
            }}>
            {/* <Image
                style={styles.mapImage}
                source={require('..//images/map.png')}/> */}
              </Content>
            </Content>
          </Container>
    );
  }
}

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 5,
  },imageStyle: {
    flex: 1,    
    alignSelf: 'stretch',
    width: null,
  }, textStyle: {
    fontSize: 22,
    color: 'red',
    backgroundColor: 'black'
  },
  mapImage:{
    alignSelf: 'stretch',
  }
});