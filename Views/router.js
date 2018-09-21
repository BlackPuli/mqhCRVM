import React, {Component} from 'react';
import {StackNavigator, createStackNavigator } from 'react-navigation';
import {Easing, Animated, Dimensions} from 'react-native';

import Courses from '../Views/Courses';
import Onboarding from './onboarding';

const {width} = Dimensions.get('window');

const RightTransition = (index, position) => {
    const sceneRange = [index - 1, index];
    const outputPosition = [width,0];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputPosition
    })

    return{
        transform: [{translateX: transition}]
    }
}

const NavigationConfig = () => {
    return{
        screenInterpolator: (sceneProps) =>{
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = scene.index;

            return RightTransition(index, position);
        }
    }
}

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

const Router = createStackNavigator({
    Onboarding:{
        screen: Onboarding,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: false 
        })
    },
    Courses:{
        screen: Courses,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true 
        }),
    },
    },{
        transitionConfig: NavigationConfig,
        initialRouteName: 'Onboarding'
    });