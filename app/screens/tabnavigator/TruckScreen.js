import React from 'react';
import { StyleSheet, Text, View,TextInput, Image, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
//import { OurButton } from '..//tools/OurButton';


export class TruckScreen extends React.Component {

  render() {
    return (
          <View style={styles.container}>
              <Text>Truck Screen</Text>
          </View>
    );
  }
}

export default TruckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },contain: {
    flex: 1,
    padding: 5,
  }
});