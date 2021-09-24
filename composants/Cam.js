import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

export default function Cam(props) {
  const [isPermission, setIsPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);
// useRef est un use state qui ne met pas à jour 
  const cameraRef=useRef(null);

  const toggleCam = () => {
   if (type===Camera.Constants.Type.front){
       setType(Camera.Constants.Type.back);
   }else {setType(Camera.Constants.Type.front);
    }
    // console.log(cameraRef.current);
   }; 


   const takePic=async()=>{
       if (cameraRef){
           const img=await cameraRef.current.takePictureAsync();
           props.saveImage(img);
           props.onClick(false);
       
       }
   }


  //useEffect s'execute quend le composant est monté

  useEffect(() => {
    //On utilise une fonction async qui renvoie "granted ou denied"
    //Puis on met à jour notre paramètre isPermission suivant le statut.
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setIsPermission(status === "granted");
    })();
    //La fonction return s'exécute quand le composant est sur le point d'être démonté
    //   return ()=>{
    //   }
  }, []);

  if (isPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
        {/* ref est une fonctionnalité de React */}
      <Camera ref={cameraRef} style={styles.camera} type={type}  >
      </Camera>
        <TouchableOpacity onPress={toggleCam}> 
          <Ionicons name="md-camera-reverse" size={32} color="black"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePic}> 
          <Ionicons name="camera-sharp" size={64} color="black"></Ionicons>
        </TouchableOpacity>
        {/* si image on peut afficher l'image 
        && test un booléen. Si le premier est true alors 
        true && true = true
        false && true = false
        true && false = false
        dans js: false null et 0 => false.
        */}
        {/* au début c'est null donc false. il s'arrête là
        équivalent {image ? <Image source={{uri:image.uri}}>  </Image> : null}
        */}
        
        

    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
