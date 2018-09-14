import React, {Component} from 'react';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';

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
            gesturesEnabled: false 
        })
    },
    },{
        transitionConfig: () => ({
            transitionSpec:{
                duration:0
            }
        }),
        initialRouteName: 'Onboarding'
    });