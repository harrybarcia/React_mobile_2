import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function Signin(props) {
    return (
        <View>
            <Text style={globalStyles.titre}>
                Signin
            </Text>
            <Text style={globalStyles.titre}>
                {props.navigation.getParam('email')}
                {/* de login.js */}
            </Text>
        </View>
    );
};

