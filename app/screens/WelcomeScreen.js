import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';

export class WelcomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  state = {
    username: 'Jkwery',
    password: 'Kweerre'
  }

  onButtonPressed() {
    alert('Our cool Button');
  } 

  render() {
    return (
          <View style={styles.container}>
                <OurButton onPress={() => this.props.navigation.navigate('LoginScreen')}>
                  <Text style={styles.textStyle}>Pronto</Text>
              </OurButton>

              {/* <OurButton onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <Text style={styles.textStyle}>Home</Text>
              </OurButton> */}
          </View>
    );
  }
}

export default WelcomeScreen;

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
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
  },buttonStlye: {
    padding:40, 
    height:60, 
    overflow:'hidden', 
    borderRadius:4, 
    color: 'blue'
  }
});