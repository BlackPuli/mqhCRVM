import React, { PureComponent } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default class Onboarding extends PureComponent{
    constructor(props) {
        super(props);
        this.nav = props.screenProps.rootNavigation
    }

    _getCourses = () => {
        this.nav.navigate("Courses")
        // this.props.screenProps.navigate('Courses')

    }

    render() {
        return (
            <View style={{flex:1}}>
            {/* <LinearGradient colors={['#00ABAA, #D459D7, #EAEE60']}> */}
                <Text>Manos Que Hablan</Text>
                <TouchableOpacity onPress={() => {this._getCourses()}} >
                    <Text>
                        INICIAR
                    </Text>
                </TouchableOpacity>
                {/* </LinearGradient> */}
            </View>
        );
    }
    
}