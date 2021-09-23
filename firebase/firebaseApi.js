// gérer le login grace a firebase.courrentuse

// import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app"
import "firebase/auth"

import "firebase/firestore";
import { Alert } from "react-native";
// on utilise une fonction asynchrone
export async function registration (email, password, lastname, firstname){
    try {
        // création de l'utilisateur - Si erreur (email existe ou incorrect) on passe au catch
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        //FB nous renvoie les données de l'utilisateur
        const currentUser=firebase.auth().currentUser; //currentuser est un objet de auth
        console.log(currentUser);
        //on accède a la base firebase avec l'id identifiant unique
        const db=firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({// si users n'existe pas, il le créé.
        email: currentUser.email,
        lastname: lastname,
        firstname: firstname,
        });
    } catch(error){
        Alert.alert("un probleme est survenu", error.message);
    }
}
//Alert c'est du react native (titre et message de l'erreur)
// on envoie une fcont asy une fois qu'elle et fini  (then) on continue le code.