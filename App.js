import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./composants/Button";
import Input from "./composants/Input";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { UserContext } from "./contexts/UserContext";
import AuthStack from "./routes/AuthStack";
// import firebaseConfig from "./firebase/firebaseConfig";
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
export default function App() {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: "AIzaSyCS4WOaIC0nNX_-BedSbfPlIwtv-r_nBkY",
        authDomain: "monapp-984f2.firebaseapp.com",
        projectId: "monapp-984f2",
        storageBucket: "monapp-984f2.appspot.com",
        messagingSenderId: "587063138272",
        appId: "1:587063138272:web:8d1429ff1c807fe1567d85",
      })
      console.log("firebase connected!")


    }

  // On declare une constante utilisateur
  const [user, setUser] = useState({ email: "", isAuth: false });
  return (
    <View style={styles.container}>
        <UserContext.Provider value={{user, setUser}}>
        {/* //1ere accolade c'est du jsx 2eme pr l'objet 
            UCP c'est un composant fonctionnel qui prend comme pté, value donc un objet.
            Compo fonctionnel.     
           
        */}

      {/*  Rendu conditionnel en rapport avec user.isAuth */}
      {user.isAuth ? (
        <Home ></Home> // mon composant home a une fonction qui se déconnecte.
      ) : (
        // <Login ></Login>
        <AuthStack></AuthStack>
      )}
      <StatusBar hidden={false} style='auto' />

        </UserContext.Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",


    fontWeight: "bold",
  },
});