import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

import {Icon, Container, Left, Button, Content, Header} from 'native-base'

export class ProfileScreen extends React.Component {

  onButtonPressed() {
    alert('Profile Edited Successfully');
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
            {/* <Content contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{fontSize: 20, color: 'red'}}>Profile Still in Progress!</Text>
            <Image
            style={styles.mapImage}
            source={require('..//images/roadtrip.jpg')}/>            
            </Content> */}
            <View style={styles.contain}>

            <Text><Text style={{fontSize: 20,color: 'blue'}}>Full Name: </Text><Text style={{fontSize: 20,color: 'black',padding:3}}> Utosu Kwerenachi Joy</Text></Text>
            <Text>     </Text>
            <Text><Text style={{fontSize: 20,color: 'blue'}}>User Name: </Text><Text style={{fontSize: 20,color: 'black',padding:3}}> Jkwery</Text></Text>
            <Text>     </Text>
            <Text><Text style={{fontSize: 20,color: 'blue'}}>Email: </Text><Text style={{fontSize: 20,color: 'black',padding:3}}> joy.utosu@3line.com</Text></Text>
            <Text>     </Text>
            <Text><Text style={{fontSize: 20,color: 'blue'}}>Password: </Text><Text style={{fontSize: 20,color: 'black',padding:3}}> *********</Text></Text>
            <Text>     </Text>
            <Text><Text style={{fontSize: 20,color: 'blue'}}>State: </Text><Text style={{fontSize: 20,color: 'black',padding:3}}> Lagos State</Text></Text>
            <Text>     </Text>

            <OurButton borderRadius='15' color='green' onPress={() => this.onButtonPressed()}>
                <Text style={{fontSize: 20, color: 'white'}}>EditProfile</Text>
              </OurButton>

              <Text>     </Text>

              <OurButton borderRadius='15' color='green' onPress={() => this.props.navigation.navigate('PromoScreen')}>
                <Text style={{fontSize: 20, color: 'white'}}>Apply Promo Code</Text>
              </OurButton>
              </View>

          </Container>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 10,
  },
  mapImage:{
  }
});