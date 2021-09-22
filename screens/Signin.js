import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

import { Formik } from "formik";
import * as yup from "yup";
import Input from "../composants/Input";
import Button from "../composants/Button";

const authSchema = yup.object({
  email: yup
    .string()
    .email("email incorrect")
    .required("email ne peut pas être vide"),
  password: yup
    .string()
    .required("password ne peut pas être vide")
    .min(6, "le mot de passe doit contenir au moins 6 caratères "),
  lastname: yup
  .string()
  .required("lastname ne peut pas être vide"),
  firstname: yup
  .string()
  .required("firstname ne peut pas être vide"),
  // 1 nom du test, 2 le mesg,  3 la fonction
});

export default function Signin(props) {
  return (
    <View>
      <View style={globalStyles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={globalStyles.text}>Commencez par vous connecter.</Text>
      </View>
      <View>
        <Formik
          initialValues={{
            email: "",
            password: "",
            lastname: "",
            firstname: "",
          }}
          validationSchema={authSchema}
          onSubmit={(values) => {
            console.log(values.firstname);
          }}
        >
          {(formikProps) => (
            <>
              <Input
                name="email"
                onChange={formikProps.handleChange("email")}
                valeur={formikProps.values.email}
                onBlur={formikProps.handleBlur("email")}
              />
              <Text>
                {formikProps.touched.email && formikProps.errors.email}
              </Text>
              <Input
                name="Mot de passe"
                onChange={formikProps.handleChange("password")}
                valeur={formikProps.values.password}
                onBlur={formikProps.handleBlur("password")}
              />
              <Text>
                {formikProps.touched.password && formikProps.errors.password}
              </Text>
              <Input
                name="Prénom"
                onChange={formikProps.handleChange("firstname")}
                valeur={formikProps.values.firstname}
                onBlur={formikProps.handleBlur("firstname")}
              />
              <Text>
                {formikProps.touched.firstname && formikProps.errors.firstname}
              </Text>
              <Input
                name="Nom"
                onChange={formikProps.handleChange("lastname")}
                valeur={formikProps.values.lastname}
                onBlur={formikProps.handleBlur("lastname")}
              />
              <Text>
                {formikProps.touched.lastname && formikProps.errors.lastname}
              </Text>
              <Button name="Inscription" onClick={formikProps.handleSubmit}></Button>
            </>
            
          )}
        </Formik>
      </View>
    </View>
  );
}
