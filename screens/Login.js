import React, { useState, useContext } from "react";
import {  StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../composants/Button";
import Input from "../composants/Input";
import { globalStyles } from "../styles/GlobalStyles";
import { UserContext } from '../contexts/UserContext';



export default function Login() {// pour pouvoir y accéder
  const [theEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context=useContext(UserContext);
//   const handleLogin = () => {
//     console.log("Email :" + email + "   -   Password : " + password);
//   };
  // Fonction qui permet de mettre a jour l'utilisateur
  const handleSubmit = () => {
    context.setUser({ email: theEmail, isAuth: true });
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={global.text}>Commencez par vous connecter.</Text>
      </View>

      <Input name='Email' onChange={setEmail} />
      <Input name='Mot de passe' onChange={setPassword} isPassword />

      <Button name='Login' onClick={handleSubmit}></Button>
      {/* on déclare la fonction avec la fonction fléchée sinon la fonction est exécutée automatiquement */}
    </>
  );
}

const styles = StyleSheet.create({

    header: {
      borderRadius: 5,
      backgroundColor: "#093357",
    },
    titre: {
      fontWeight: "bold",
      padding: 25,
      fontSize: 32,
      color: "#bbb",
    },
    text: {
      fontWeight: "bold",
      padding: 12,
      fontSize: 16,
      color: "#bbb",
    },
  });