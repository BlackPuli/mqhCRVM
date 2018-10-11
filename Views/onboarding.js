import React, { PureComponent } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

const gold = "#f7a81b";

const buttons = [
    {label: "Básico", icon: "pencil-square-o", type:"font-awesome"},
    {label: "Comunicación", icon:"bubble", type:"simple-line-icon"},
    {label: "Emergencias", icon: "plus-outline", type: "material-community"}
]

export default class Onboarding extends PureComponent{
    static navigationOptions = {
        header:({navigation}) => {
            return (
                <View style={{height:60, backgroundColor:gold, flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:1, backgroundColor:'#c10042'}} >
                        <Icon name="menu" color="#fff" size={40} containerStyle={{marginTop:10}} />
                    </TouchableOpacity>
                    <View style={{flex:5}}>
                        <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop:15, color:'#fff'}} >MANOS QUE HABLAN</Text>
                    </View>
                </View>
            )
        }
    }

    constructor(props) {
        super(props);
        this.entrance = new Animated.Value(0.5);
    }

    _getCourses = () => {
        this.props.navigation.push('Basics')
    }
    
    _getButtons = () => {
        return buttons.map((item,i) => {
            return(
                <Animated.View style={{flex:1, transform:[{scale:this.entrance}]}}>
                     <TouchableOpacity style={[styles.button, {flex:1}]} onPress={() => {this._getCourses()}} >
                        <View>
                            <Icon name={item.icon} type={item.type} color={gold} size={60} />
                            <Text style={[styles.text]}>
                                {item.label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            )
        })
    }

    componentDidMount = () => {
        Animated.spring(
            this.entrance,{
                toValue: 1,
                duration: 1000,
                easing: Easing.ease,
                friction: 5
            }
        ).start();
    };

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'#fff', paddingTop:'10%'}}>
                   {this._getButtons()}
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
    },
    text:{
        color: "#fff",
        fontSize:20,
        textAlign: 'center',
        backgroundColor:gold,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop:20
    }
})