import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
    <TouchableOpacity onPress={props.onClick}>
         <Text style={styles.bouton}> {props.name} </Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bouton:{
      backgroundColor:"#093357",
      padding:8,
      margin:10,
      width:100,
      color:"#bbb",
      borderRadius:5,
      textAlign:"center"
    }
  });