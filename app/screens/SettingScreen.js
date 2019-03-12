import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

import {Icon, Container, Left, Button, Content, Header} from 'native-base'

export class SettingScreen extends React.Component {

  render() {
    return (
          <Container>
            {/* <Content contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
              <Text>This is the Actual SettingScreen</Text>
            </Content> */}


            <View style={styles.container}>

            <OurButton borderRadius='15' color='#9a73ef' onPress={() => this.onButtonPressed()}>
                <Text style={{fontSize: 20, color: 'white'}}>Change Password</Text>
              </OurButton>

              <Text>     </Text>

              <OurButton borderRadius='15' color='#9a73ef' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text style={{fontSize: 20, color: 'white'}}>Register New User</Text>
              </OurButton>

              <Text>     </Text>

              <OurButton borderRadius='15' color='#9a73ef' onPress={() => this.props.navigation.navigate('PromoScreen')}>
                <Text style={{fontSize: 20, color: 'white'}}>Apply Promo Code</Text>
              </OurButton>
              
            </View>
          </Container>
    );
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 10,    
  },contain: {
    flex: 1,
    padding: 10,
  },
  mapImage:{
    alignSelf: 'stretch',
  }
});