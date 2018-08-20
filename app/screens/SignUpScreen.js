import React from 'react';
import { StyleSheet, Text, View,TextInput,Button, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';
import { TextField } from 'react-native-material-textfield';

export class SignUpScreen extends React.Component {
  state = {
    fullname: '',
    username: '',
    password: '',
    email: '',
    state: ''

  }

  onButtonPressed() {
    alert('Sign Up Succesful');
  }

  render() {
    let { fullname } = this.state;
    let { username } = this.state;
    let { email } = this.state;    
    let { password } = this.state;
    let { state } = this.state;
    
    return (
          <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
              <View>
                <TextField style={styles.textStyle}
                label='Full Name'
                value={fullname}
                onChangeText={ (fullname) => this.setState({ fullname }) }
                />
                <TextField style={styles.textStyle}
                label='Username'
                value={username}
                onChangeText={ (username) => this.setState({ username }) }
                />
                <TextField style={styles.textStyle}
                label='Email'
                value={email}
                onChangeText={ (email) => this.setState({ email }) }
                />
                <TextField style={styles.textStyle}
                label='Password'
                value={password}
                onChangeText={ (password) => this.setState({ password }) }
                secureTextEntry
                />
                <TextField style={styles.textStyle}
                label='State'
                value={state}
                onChangeText={ (state) => this.setState({ state }) }
                />
                
              </View>
              {/* <Button 
              title={'Sign up'}
              accessibilityLabel="Learn more about this button"
              style = {{color:'red',width: 200,height: 30,borderRadius: 10,backgroundColor:'orange'}}
              onPress={() => this.onButtonPressed()}
              
              /> */}
                
              <OurButton borderRadius='15' color='#ff0000' onPress={() => this.onButtonPressed()}>
                <Text style={{fontSize: 20, color: 'white'}}>Sign up</Text>
              </OurButton>
              
             </KeyboardAvoidingView>
                      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },contain: {
    flex: 1,
    padding: 5,
  }, textStyle: {
    fontSize: 18,
    // color: 'red',
  },buttonSt: {
    color: 'red',
    width: 200,
    height: 30,
    borderRadius: 10,
  }
});