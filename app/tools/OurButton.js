import React from 'react';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const OurButton = (props) => {
    return (
        // <Button
        //     title={props.buttonName || 'Button'}
        //     color={props.color || 'tomato'}
        //     onPress={props.onPress}
        // />
        <TouchableOpacity onPress={props.onPress} style={{height: props.height || 52, backgroundColor: props.color || '#fff', justifyContent: 'center', alignItems: 'center',width: props.width || null,borderRadius: props.borderRadius || null,paddingTop: props.paddingTop||5}}>
            {/* <Text style={{fontSize: 20, color: 'white'}}>{props.children}</Text> */}
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpa: {
        // width: props.width || null,
        // height: props.height || 50, 
        // backgroundColor: props.color || '#fff', 
        // justifyContent: 'center', 
        // alignItems: 'center',
        // borderRadius: props.borderRadius || null,
    }
  });
