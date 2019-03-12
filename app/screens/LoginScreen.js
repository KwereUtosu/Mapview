import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity, Animated} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';
import { TextField } from 'react-native-material-textfield';
import * as Animatable from 'react-native-animatable';
console.disableYellowBox = true;

// import DrawerNavigator from './DrawerNavigator';

export class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
      }

  state = {
    username: '',
    password: '',
    phone: ''
  }

  onButtonPressed() {
    alert('Sign Up Page is Still in Progress');
  }

  render() {
    let { username } = this.state;
    let { password } = this.state;
    
    return (
          <View style={styles.contain}>
            <View style={styles.containAnime}>
            <Animatable.View animation="zoomIn" iterationCount={1} style={styles.fakeLogo}>
              <Text style={{fontWeight: 'bold',color: 'white', fontSize: 30,alignSelf: 'center'}}>Q-LOQ</Text>
              {/* <Image style={styles.logo} source={require('..//images/pronto.jpg')}/> */}

            </Animatable.View>  
            </View>
            {/* <View style={{flex: 1, justifyContent: 'center'}}> */}
              <Animatable.View animation="slideInUp" iterationCount={1}>
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
              <View>
                <TextField style={styles.textStyle}
                label='Username'
                value={username}
                onChangeText={ (username) => this.setState({ username }) }
                />
                <TextField style={styles.textStyle}
                label='Password'
                value={password}
                onChangeText={ (password) => this.setState({ password }) }
                secureTextEntry
                />
                
              </View>
              <OurButton borderRadius='15' color='#ff0000' onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                <Text style={{fontSize: 22, color: 'white'}}>Login</Text>
              </OurButton>

              {/* <OurButton borderRadius='15' color='#ff0000' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text style={{fontSize: 20, color: 'white'}}>Sign In</Text>
              </OurButton> */}

              <OurButton height='11%' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text><Text style={{fontSize: 14,textAlign: 'center',color: 'black'}}>New User?</Text><Text style={{fontSize: 14,textAlign: 'center',color: 'blue',padding:3}}> Sign Up</Text></Text>
             </OurButton>
             <OurButton height='11%' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                <Text style={{fontSize: 13,textAlign: 'center',color: 'black'}}>Forgot Password?</Text>
             </OurButton>
             </KeyboardAvoidingView>
                {/* </View> */}
                </Animatable.View>
        //</View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
    // backgroundColor: '#D3D3D3',  
  },containAnime: {
    flex: 1,    
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center', 
  },imageStyle: {
    flex: 1,    
    alignSelf: 'stretch',
    width: null,
  }, textStyle: {
    fontSize: 18,
  },
  logoContainer:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center', 
  },
  logo: {
    width: 150,
    height: 150
    },
  wrapper: {
    padding: 10,    
  },
  fakeLogo:{
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center', 
    width: 120,
    height: 120
    }
});