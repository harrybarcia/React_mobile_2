import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../composants/Button";
import Input from "../composants/Input";
import { globalStyles } from "../styles/GlobalStyles";
import { UserContext } from "../contexts/UserContext";
import { Formik } from "formik";
import * as yup from "yup";
// Par choix, je décide de déclarer le authSchema a l'extérieure dans l'éventualité de l'exporter
// on créé deux objets avec leur propriétés
const authSchema = yup.object({
  email: yup
    .string()
    .email("email incorrect")
    .required("email ne peut pas être vide"),
  password: yup
    .string()
    .required("password ne peut pas être vide")
    .min(6, "le mot de passe doit contenir au moins 6 caratères ")

  // 1 nom du test, 2 le mesg,  3 la fonction
});

export default function Login(props) {
  // plus besoin avec formik
  // const [theEmail, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  // Fonction qui permet de mettre a jour l'utilisateur
  const handleSubmit = (email, password) => {
    /* j'utilise plus les deux constantes, donc je dois remplir ici avec les valeur passées dans handlesubmit de formik */
    context.setUser({ email: email, isAuth: true });
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={globalStyles.text}>Commencez par vous connecter.</Text>
      </View>
      {/* Formik a besoin de: Valeurs initiales (initalValues) Validation yup (validationSchema) Fonction exécutée (onSubmit)*/}

      <Formik //prend 3 étapes
        initialValues={{ email: "", password: "" }}
        validationSchema={authSchema}
        //onSubmit est un parametre qui accepte une fonction à executer
        onSubmit={(values) => {
          console.log("mail: " + values.email + " pass: " + values.password);
          handleSubmit(values.email, values.password);
        }}
      >
        {/* Cette fonction va afficher nos inputs a l'écran, et grâce au formikProps (terme personnel) on pourra accéder à d'autres paramètres comme les valeurs d'e-mail ou password */}
        {(formikProps) => (
          <>
            {/* Le paramètre  valeur permet a formik d'écouter les changements de notre input
            Formik nous offre la fonction handleChange pour modifier les valeurs. Nous n'avons pas besoin de useState */}
            <Input
              name="email"
              onChange={formikProps.handleChange("email")} // on change les données de l'input avec le mot cle email
              valeur={formikProps.values.email}
              onBlur={formikProps.handleBlur("email")}
            />
            <Text>{formikProps.touched.email && formikProps.errors.email}</Text>
            <Input
              name="Mot de passe"
              onChange={formikProps.handleChange("password")}
              isPassword
              valeur={
                formikProps.touched.password && formikProps.values.password
              }
              /*               La propriété onBlur est une fonction qui s'exécute quand on quitte un input
               */
              onBlur={formikProps.handleBlur("password")}
            />
            <Text>
              {/*               La propriété touched est un boolean qui permet de savoir si un input a été touché ou pas.
               */}
              {formikProps.errors.password && formikProps.touched.password}
            </Text>
            {/* On utilise le mot-clé fourni par Formik 'handleSubmit', pour exécuter la fonction onSubmit préciser plus haut */}
            <Button name="Login" onClick={formikProps.handleSubmit}></Button>
          </>
        )}
      </Formik>
      {/* Ce button est pour naviguer vers Signin */}

      <Button
        name="Signin"
        // Il faut passer une référence à la fonction en utilisant la syntaxe en flèche.
        onClick={() =>
          props.navigation.navigate("Signin", { email: "emaifgl" })
        }
      />
    </View>
  );
}
/* const styles = StyleSheet.create({
  header: {
    backgroundColor: "#093357",
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    padding: 12,
    fontSize: 16,
    color: "#bbb",
  },
}); */
