import React, { PureComponent } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TouchableHighlight} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default class Onboarding extends PureComponent{
    constructor(props) {
        super(props);
        this.nav = props.screenProps.rootNavigation
    }

    _getCourses = () => {
        console.log("OTHER COURSES");

    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#f4f4f4', paddingTop:20}}>
            {/* <LinearGradient colors={['#00ABAA, #D459D7, #EAEE60']}> */}
                <View style={{flex:1}}>
                    <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop:100}} >Manos Que Hablan</Text>
                </View>
                <View style={{flex:2}}>
                    <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight underlayColor="#136a66" style={[styles.button, {flex:1}]} onPress={() => {this.nav.navigate("Courses")}} >
                        <Text style={{fontSize: 20, textAlign:'center', marginVertical: 35}}>
                            BÁSICO
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#136a66" style={[styles.button, {flex:1}]} onPress={() => {this._getCourses()}} >
                        <Text style={{fontSize: 20, textAlign:'center', marginVertical: 20}}>
                            TABLEROS DE COMUNICACIÓN
                        </Text>
                    </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight underlayColor="#136a66" style={[{ marginTop:20},styles.button]} onPress={() => {this._getCourses()}} >
                        <Text style={{fontSize: 20, textAlign:'center', marginVertical: 40}}>
                            EMERGENCIAS
                        </Text>
                    </TouchableHighlight>
                    </View>
                </View>
                {/* </LinearGradient> */}
            </View>
        );
    }
    
}

const styles = new StyleSheet.create({
    button:{
        backgroundColor:'#20b2aa', 
        marginHorizontal:5, 
        borderRadius: 15, 
        borderWidth: 5, 
        borderColor:'#1ca099',
        shadowColor: '#031111',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.2,
        // borderRightColor:'#1ca099', 
        // borderLeftColor: '#1ca099', 
        // borderTopColor:'#105955', 
        // borderBottomColor: '#105955', 
    }
})