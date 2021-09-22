import Login from "../screens/Login";
import Signin from "../screens/Signin";

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
const screens ={
    Login:{
        screen: Login,
        navigationOptions:{
            title:'Connection',
        },
    },
    Signin:{
        screen: Signin,
        navigationOptions:{
            title:'Inscription',
        },
    },
};
const AuthStack=createStackNavigator(screens);
export default createAppContainer(AuthStack)
