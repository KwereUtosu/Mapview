import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';
import { TextField } from 'react-native-material-textfield';

import {Icon, Container, Left, Button, Content, Header} from 'native-base'

export class PromoScreen extends React.Component {

  state = {
    state: ''
  }

  onButtonPressed() {
    alert('Promo Applied Successfully');
  }

  render() {
    let { state } = this.state;
    
    return (
          <Container>
            {/* <Content  contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{fontSize: 20, color: 'red'}}>Promotions Coming Soon!</Text>
            <Image
            style={styles.mapImage}
            source={require('..//images/stuf.jpg')}/>
            </Content> */}
            <View style={styles.container}>
            <TextField style={styles.textStyle}
                label='Promo Code'
                value={state}
                onChangeText={ (state) => this.setState({ state}) }
                />
                
              <OurButton borderRadius='15' color='#9a73ef' onPress={() => this.onButtonPressed()}>
                <Text style={{fontSize: 20, color: 'white'}}>Apply Promo Code</Text>
              </OurButton>

              <Text>     </Text>


              <OurButton borderRadius='15' color='blue' onPress={() => this.onButtonPressed()}>
                <Text style={{fontSize: 20, color: 'white'}}>Invite A Friend</Text>
              </OurButton>
            </View>
          </Container>
    );
  }
}

export default PromoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 5,    
  },contain: {
    flex: 1,
    padding: 5,
  },textStyle: {
    fontSize: 18,
  }
});