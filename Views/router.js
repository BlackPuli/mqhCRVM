import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Easing, Animated} from 'react-native';

import Courses from '../Views/Courses';
import Onboarding from './onboarding';

export default class AppRouter extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router />
        );
    }

}

const Router = StackNavigator({
    Onboarding:{
        screen: ({navigation}) => <Onboarding screenProps={{ rootNavigation: navigation }} />,
        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: false 
        })
    },
    Courses:{
        screen: ({navigation}) => <Courses screenProps={{ rootNavigation: navigation }} />,
        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: true 
        }),
    },
    },{
        transitionConfig: () => ({
            transitionSpec:{
                duration:200,
                easing: Easing.ease,
            }
        }),
        initialRouteName: 'Onboarding'
    });