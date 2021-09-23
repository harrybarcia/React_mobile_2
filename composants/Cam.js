import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Cam() {
  const [isPermission, setIsPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
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

  //
  if (!isPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }
  return (
    <View>
      <Camera style={styles.camera} type={type}></Camera>
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
