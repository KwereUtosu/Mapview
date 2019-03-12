import React from 'react';
import { StyleSheet, Text, View,TextInput, Image,ImageBackground, KeyboardAvoidingView,TouchableOpacity, Animated} from 'react-native';
import { OurButton } from '..//tools/OurButton';
import { Form } from '..//components/Form';
import { TextField } from 'react-native-material-textfield';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'


export class WelcomeScreen extends React.Component {

 
  static navigationOptions = {
    header: null,
  }

  state = {
    username: 'Jkwery',
    password: 'Kweerre',
    userIcon: <Ionicons name="ios-home" size={20} />
  }

  onButtonPressed() {
    alert('Our cool Button');
  } 

  render() {
    let { username } = this.state;
    let { password } = this.state;

    return (
          <View style={styles.container}>
           
              <ImageBackground blurRadius={2} style={styles.imageStyle} source={require('..//images/layer.jpg')}>
                <View style={styles.overlay}>
                  <View style={styles.containAnime}>
                    <Animatable.View animation="zoomIn" iterationCount={1} style={styles.fakeLogo}>
                      <Text style={{fontWeight: 'bold',color: 'white', fontSize: 40,alignSelf: 'center'}}>Qeep</Text>
                    </Animatable.View>  
                  </View>

                  <View>
                  <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                    <View style={styles.iconTxtField}>
                      {/* <View>
                    <Ionicons name="ios-home" size={20} />
                    </View> */}
                    <View>
                      <TextField style={styles.textStyle}
                      label='Username'
                      value={username}
                      tintColor = '#51bc8a'
                      textColor = '#51bc8a'
                      baseColor = 'white'
                      onChangeText={ (username) => this.setState({ username }) }
                      />
                      </View>
                      </View>
                      <View style={styles.iconTxtField}>
                      <View>
                      <Ionicons name="ios-home" size={20} />
                      </View>
                      <View>
                      <TextField style={styles.textStyle}
                      label='Password'
                      value={password}
                      baseColor = 'white'
                      onChangeText={ (password) => this.setState({ password }) }
                      secureTextEntry
                      />
                      </View>
                      </View>
                      <OurButton borderRadius='15' color='#ff0065' onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                        <Text style={{fontSize: 22, color: 'white'}}>Login</Text>
                      </OurButton>

                        <OurButton height='11%' color='transparent' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                          <Text><Text style={{fontSize: 14,textAlign: 'center',color: 'white'}}>New User?</Text><Text style={{fontSize: 14,textAlign: 'center',color: '#9a73ef',padding:3}}> Sign Up</Text></Text>
                      </OurButton>
                      <OurButton height='11%' color='transparent' onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                          <Text style={{fontSize: 13,textAlign: 'center',color: 'white'}}>Forgot Password?</Text>
                      </OurButton>
                    </KeyboardAvoidingView>
                  </View>
                </View>
                </ImageBackground>
             
          </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },contain: {
    flex: 1,
    padding: 5,
  },imageStyle: {
    flex: 1,    
    resizeMode: 'cover',
    width: '100%',
    //blurRadius: '20%'
  },shapee: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  overlay: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  // backgroundColor: 'white',
  // opacity: 0.2
},containAnime: {
  flex: 1,    
  // backgroundColor: '#fff',
  alignSelf: 'center',
  justifyContent: 'center',
  opacity: 1 
}, textStyle: {
  fontSize: 18,
},
wrapper: {
  padding: 10,    
},
fakeLogo:{
  borderRadius: 20,
  backgroundColor: '#ff0065',
  alignSelf: 'center',
  justifyContent: 'center', 
  width: 120,
  height: 120,
  opacity: 1  
  },
  iconTxtField: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});