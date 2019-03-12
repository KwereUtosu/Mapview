import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

import Ionicons from 'react-native-vector-icons/Ionicons'
import {Icon, Container, Left, Button, Content, Header,StyleProvider} from 'native-base'
import MapView from 'react-native-maps'

export class HomeMap extends React.Component {

  static propTypes = {
    data: PropTypes.string
  };

  static navigationOptions = {
    drawerIcon:(
      <Ionicons name="ios-settings" size={30} />
    )
  }

  state = {
    username: 'Jkwery',
    password: 'Kweerre '
  }

  onButtonPressed() {
    alert('Riders Are Not Avaliable Right Now');
  }

  render() {
    return (
          <Container>
            <Header>
              <Left>
                <Icon name="ios-menu" onPress={() =>
                  this.props.navigation.navigate('DrawerOpen')}/>
              </Left>
            </Header>

            <View style={styles.container}>
              <MapView
                style={styles.map}
                initialRegion={{
                  //latitude: 37.78825,
                  //longitude: -122.4324,
                  latitude: 6.6080,
                  longitude: 3.6218,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}
              />
            </View>

          </Container>
    );
  }
}

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
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