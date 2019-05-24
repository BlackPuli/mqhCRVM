import React, { PureComponent } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Header from './components/header';

const gold = "#f7a81b";

const buttons = [
    {label: "Básico", icon: "pencil-square-o", type:"font-awesome", route:'Basics'},
    // {label: "Comunicación", icon:"bubble", type:"simple-line-icon", route:'Basics'},
    {label: "Emergencias", icon: "plus-outline", type: "material-community", route:'Emergencys'}
]

export default class Onboarding extends PureComponent{
    static navigationOptions = {
        header :({navigation}) =>(
            <Header 
                title="MANOS QUE HABLAN"
                leftIcon="menu"
                leftAction={null}
            />
        )
    }

    constructor(props) {
        super(props);
        this.entrance = new Animated.Value(0.5);
    }

    _getCourses = (route) => {
        this.props.navigation.push(route)
    }
    
    _getButtons = () => {
        return buttons.map((item,i) => {
            return(
                <Animated.View style={{flex:1, transform:[{scale:this.entrance}]}}>
                     <TouchableOpacity style={[styles.button, {flex:1}]} onPress={() => {this._getCourses(item.route)}} >
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