import Login from "../screens/Login";
import Signin from "../screens/Signin";

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
const screens ={
    //route
    Login:{
        screen: Login, // composants
        navigationOptions:{
            title:'Connection',
        },
    },
    //route
    Signin:{
        screen: Signin,// composants
        navigationOptions:{
            title:'Inscription',
        },
    },
};
const AuthStack=createStackNavigator(screens);
export default createAppContainer(AuthStack)
