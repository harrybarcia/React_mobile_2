import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Button from '../composants/Button';
import { globalStyles } from '../styles/GlobalStyles';

import { UserContext } from '../contexts/UserContext';
UserContext
export default function Home(){
    const context=useContext(UserContext);

    const handleLogout = () => {
        context.setUser({ email: "", isAuth: false }); // fonction qui déconnecte
      };
    return (
        // mon composant home a une vue avec son style, son button qui a un nom (logout) et une fonction qui se déclenche au clicK.
    <View>
        <Text style={globalStyles.titre}>Home</Text>
        <Button name='Logout' onClick={handleLogout}></Button>      
    </View>
    );

}
