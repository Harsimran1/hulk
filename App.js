/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


import HomeScreen from './screens/home'
import DetailsScreen from './screens/detail'
import LoginScreen from './screens/login'
import SignUpScreen from './screens/signup'


import {
    StackNavigator,
} from 'react-navigation';

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerTitle: 'Login',
        },
    },
    Signup: {
        screen: SignUpScreen,
        navigationOptions: {
            headerTitle: 'Sign Up',
        },
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Detail',
        },
    },
});

export default class App extends React.Component {
    render() {
        return (
            <RootNavigator ref={nav => { this.navigator = nav; }} />
        );
    }
};


