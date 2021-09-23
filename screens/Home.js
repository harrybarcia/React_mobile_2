import React, { useContext, useState } from "react";
import { Modal, Text, View } from "react-native";
import Button from "../composants/Button";
import { globalStyles } from "../styles/GlobalStyles";

import { UserContext } from "../contexts/UserContext";
import Cam from "../composants/Cam";
UserContext;
export default function Home() {
  const context = useContext(UserContext);
  const [isCamera, setIsCamera] = useState(false);
  const handleLogout = () => {
    context.setUser({ email: "", isAuth: true }); // fonction qui déconnecte
  };
  return (
    // mon composant home a une vue avec son style, son button qui a un nom (logout) et une fonction qui se déclenche au clicK.
    <View>
      {/* Modal est une composant qui s'affiche selon une condiotion donnée en propriété nommé visible */}
      <Modal visible={isCamera}>
        <Cam></Cam>
      <Button style= {{margin:10}} name="fermer Camera" onClick={()=>{setIsCamera(false)}}></Button>
      </Modal>
      <Text style={globalStyles.titre}>Home</Text>
      <Button name="Ouvrir Camera" onClick={()=>{setIsCamera(true)}}></Button>
      <Button name="Logout" onClick={handleLogout}></Button>
    </View>
  );
}
