import React, { useContext, useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import Button from "../composants/Button";
import { globalStyles } from "../styles/GlobalStyles";
import { UserContext } from "../contexts/UserContext";
import Cam from "../composants/Cam";
import { TouchableOpacity } from "react-native-gesture-handler";
UserContext;
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
export default function Home() {
  const context = useContext(UserContext);
  const [isCamera, setIsCamera] = useState(false);
  const [image, setImage] = useState(null);

  const saveImage = (img) => {
    console.log("test");
    console.log(img);
    setImage(img);
  };

  const handleLogout = () => {
    context.setUser({ email: "", isAuth: true }); // fonction qui déconnecte
  };

  //   fonction qui va recevoir img et utiliser set image pour la mémoriser . On envoit la fonctionnalité dans Camera dans home atravers props. En props a "cam"
  //   Dans cam on utilesera img et on utilise props.qqc on passe img et quand elle sera exe home mettra l'img dans la const.

  return (
    // mon composant home a une vue avec son style, son button qui a un nom (logout) et une fonction qui se déclenche au clicK.
    <View>
      {/* Modal est une composant qui s'affiche selon une condition donnée en propriété nommé visible */}
      <Modal visible={isCamera}>
        <Cam saveImage={saveImage} onClick={setIsCamera}  ></Cam>
        <Button
          name="fermer Camera"
          onClick={() => {
            setIsCamera(false);
          }}
        ></Button>
      </Modal>
      <Text style={globalStyles.titre}>Home</Text>

      <TouchableOpacity onPress={() => setIsCamera(true)}>
        <Ionicons name="camera-sharp" size={32} color="black"></Ionicons>
      </TouchableOpacity>
      {/* <Button name="Ouvrir Camera" onClick={()=>{setIsCamera(true)}}></Button> */}
      <View style={{ width: 300, height: 300 }}>
        {image && (
          <Image style={{ flex: 1 }} source={{ uri: image.uri }}></Image>
        )}
      </View>

      <Button name="Logout" onClick={handleLogout}></Button>
    </View>
  );
}
