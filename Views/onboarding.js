import React, { PureComponent } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

const colorText = "#f7a81b";

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
            <View style={{flex:1}}>
                <View style={{height:60, backgroundColor:colorText, flexDirection:'row', flex:1}}>
                    <View style={{flex:1, backgroundColor:'#c10042'}} >
                        <Icon name="menu" color="#fff" size={40} containerStyle={{marginTop:10}} />
                    </View>
                    <View style={{flex:5}}>
                        <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop:15, color:'#fff'}} >MANOS QUE HABLAN</Text>
                    </View>
                </View>
                <View style={{flex:8, backgroundColor:'#fff', paddingTop:'10%'}}>
                    <TouchableOpacity underlayColor="#136a66" style={[styles.button, {flex:1}]} onPress={() => {this.nav.navigate("Courses")}} >
                        <View>
                            <Icon name="search" color={colorText} size={60} />
                            <Text style={[styles.text]}>
                                Básico
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor="#136a66" style={[styles.button, {flex:1,marginTop:20}]} onPress={() => {this._getCourses()}} >
                        <View>
                            <Icon name="bubble" type="simple-line-icon" color={colorText} size={50} />
                            <Text style={[styles.text]}>
                                Comunicación
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor="#136a66" style={[styles.button, {flex:1,marginBottom:20}]} onPress={() => {this._getCourses()}} >
                    <View>
                    <Icon name="plus-outline" type="material-community" color={colorText} size={70} />
                    <Text style={[styles.text]}>
                        Emergencias
                    </Text>
                </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    
}

const styles = new StyleSheet.create({
    button:{
        backgroundColor:'transparent',
        shadowColor: '#031111',
        alignSelf: 'center',
        width:'40%'
        // borderRightColor:'#1ca099', 
        // borderLeftColor: '#1ca099', 
        // borderTopColor:'#105955', 
        // borderBottomColor: '#105955', 
    },
    text:{
        color: "#fff",
        fontSize:20,
        textAlign: 'center',
        backgroundColor:colorText,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop:20
    }
})