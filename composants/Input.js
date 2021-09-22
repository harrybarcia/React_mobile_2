import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    return (
        <TextInput
        onChangeText={(text)=>props.onChange(text)}//pareil que event.target.value; Text=Onchange(text)
        style={styles.input}
        placeholder={props.name}
        placeholderTextColor="#bbb"
        value={props.valeur}
        onBlur={props.onBlur}
      ></TextInput>
    )
}

const styles = StyleSheet.create({
    input:{
      backgroundColor:"#093357",
      padding:8,
      margin:10,
      width:100,
      color:"#bbb",
      borderRadius:5,
      textAlign:"center"
    }
  });
export default Input;