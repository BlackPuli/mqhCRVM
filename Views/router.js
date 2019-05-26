import React, {Component} from 'react';
import {StackNavigator, createStackNavigator } from 'react-navigation';
import {Easing, Animated, Dimensions, SafeAreaView} from 'react-native';

import Basics from './Basics';
import Emergencys from './Emergencys'
import Onboarding from './onboarding';
import Alphabet from './Basics/Alphabet';
import Face from './Emergencys/Face';

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
            <SafeAreaView style={{ flex: 1 }}>
                <Router />
            </SafeAreaView>
        );
    }

}

const Emerg = createStackNavigator({
  Home:{
    screen: Emergencys,
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false 
    })
  },
  Face:{
    screen: Face,
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false 
    })
  }
},{
  transitionConfig: NavigationConfig,
  initialRouteName: 'Home'
})


const Router = createStackNavigator({
    Onboarding:{
        screen: Onboarding,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: false 
        })
    },
    Basics:{
        screen: Basics,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true 
        }),
    },
    Emergencys:{
        screen: Emerg,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true,
            header: null,
        }),
    },
    Alphabet:{
        screen: Alphabet,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true
        })
    }
    },{
        transitionConfig: NavigationConfig,
        initialRouteName: 'Onboarding'
    });