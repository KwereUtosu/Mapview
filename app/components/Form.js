// import React from 'react';
// import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';

// export default class Form extends React.Component {

//   onButtonPressed() {
//     alert('Our cool Button');
//   }

//   render() {
//     return (
//        <view style={styles.formContainer}>
//          <TextInput style={styles.textInput}
//          underlineColorAndroid={'transparent'}>
//          </TextInput>
//        </view>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   formContainer: {
//     alignSelf: 'stretch',
//   },textInput: {
//     alignSelf: 'stretch',
//     padding: 20,
//     backgroundColor: '#fff',
//   }
// });

import React from 'react';
import { StyleSheet, Text, View,TextInput, Image,ImageBackground, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import { OurButton } from '..//tools/OurButton';


export default class App extends React.Component {
  state = {
    username: 'Jkwery',
    password: 'Kweerre'
  }

  onButtonPressed() {
    alert('Our cool Button');
  }

  render() {
    return (
        // <View>
        //   <View style={{flex: 1}}>
        //     <Image style={styles.imageStyle} source={require('./app/images/pronto.jpg')}/>>
        //   </View>
          <View style={styles.contain}>
            <View style={{flex: 2,padding:20}}>
              <Image style={styles.imageStyle} source={require('..//images/pronto.jpg')}/>
            </View>  

            {/* <View style={{flex: 1, justifyContent: 'center'}}> */}
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
              <View>
                 <TextInput style={styles.textInput}
                    underlineColorAndroid = "transparent"
                    placeholder = "Username"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    value={this.state.username}
                    onChangeText={(val) => this.setState({ username: val })}
                />
          
                <TextInput style={styles.textInput}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    value={this.state.password}
                    onChangeText={(val) => this.setState({ password: val })}
                    secureTextEntry
                />
              </View>
              <OurButton color='#ff0000' onPress={() => this.onButtonPressed()}>
             {/* Login */}
                <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
              </OurButton>

             <Text style={{fontSize: 12,textAlign: 'center',color: 'black'}}>New User? Sign Up</Text>
             </KeyboardAvoidingView>
                {/* </View> */}
          </View>
        //</View>

      // <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
      //     <ImageBackground style={styles.imageStyle} source={require('./app/images/roadtrip.jpg')}>
      //       <Text >Login</Text>
      //       <View>
      //       <view style={styles.formContainer}>
      //    <TextInput style={styles.textInput}
      //    underlineColorAndroid={'transparent'}>
      //    </TextInput>
      //  </view>
      //       </View>
      //     </ImageBackground>

      // </KeyboardAvoidingView>


      // <View style={styles.contain}>
      //    {/* <Image
      //      style={styles.imageStyle}
      //      source={require('./app/images/love.png')}
      //     /> */}
      //     <View style={{flex: 2}}></View>

      //     <View style={{flex: 1, justifyContent: 'center', height: 50}}>
      //     <TextInput
      //       value={this.state.username}
      //       onChangeText={(val) => this.setState({ username: val })}
      //     />
          
      //     <TextInput
      //       value={this.state.password}
      //       onChangeText={(val) => this.setState({ password: val })}
      //       secureTextEntry
      //     />
      //     {/* <OurButton buttonName='Submit' color='navy' onPress={() => this.onButtonPressed()} /> */}
      //     <OurButton color='#ff0033' onPress={() => this.onButtonPressed()}>
      //       {/* Login */}
      //       <Text style={{fontSize: 20, color: 'white'}}>Signin</Text>
      //     </OurButton>
      //   </View>
      //   {/* <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text> */}
      // </View>
    );
  }
}

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
  textInput:{
    paddingVertical: 2,
    height: 50, 
    
  },
  biggerFont: {
    fontSize: 30
  },
  wrapper: {
    flex: 1
  }
});

