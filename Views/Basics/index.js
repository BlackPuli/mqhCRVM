import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity,Animated,Easing} from 'react-native';
import { Icon } from "react-native-elements";
import Header from '../components/header';

const gold = "#f7a81b";

const lessons = [
    {
        title:'Alfabeto',
        duration: '4 horas',
        img: require('../../Images/abc.png'),
        to: "Alphabet"
    },
    {
        title:'Números',
        duration: '4 horas',
        img: require('../../Images/numbers.png'),
        to: "Alphabet"
    },
    {
        title:'Fechas',
        duration: '4 horas',
        img: require('../../Images/calendar.png'),
        to: "Alphabet"
    },
    {
        title:'Cortesía',
        duration: '4 horas',
        img: require('../../Images/manners.png'),
        to: "Alphabet"
    },
    {
        title:'Lengua de Señas Mexicanas',
        duration: '4 horas',
        img: require('../../Images/ok.png'),
        to: "Alphabet"
    }
]

export default class Courses extends Component{
    static navigationOptions = {
        header :({navigation}) =>(
            <Header 
                title="Básico"
                leftIcon="arrow-back"
                leftAction={() => { navigation.pop()}}
            />
        )
    }

    constructor(props) {
        super(props);
        this.entrance = new Animated.Value(0.50)
    }

    _navigateTo(route){
        let {navigation} = this.props;
        navigation.push(route)
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
    

    _renderCourses = () => {
      return lessons.map((item,index) => {
          return(
              <Animated.View style={{flex:1,  transform:[{scale: this.entrance}]}} key={index}>
                <TouchableOpacity underlayColor="#136a66" style={[styles.buttonColor, {height: 50, marginVertical: 10, flex:1, marginHorizontal: 20}]} onPress={() =>{this._navigateTo(item.to)}}>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Image 
                        source={item.img} 
                        resizeMode="contain" 
                        style={{width: "10%", alignSelf:'center', flex:1}} 
                        />
                    <View style={{flex: 3}}>
                        <Text style={{fontSize:20, marginTop:10}}>{item.title}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{marginTop:5}}>{item.duration}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                </Animated.View>
          )
      })
    }
    

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#f4f4f4', paddingTop: 20}}>
                <View style={{flex:1}}>
                    {this._renderCourses()}
                </View>
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    buttonColor:{
        backgroundColor:gold, 
        marginHorizontal:5, 
        borderRadius: 15, 
        // borderWidth: 5, 
        // borderColor:'#1ca099',
        // shadowColor: '#031111',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,
        shadowOpacity: 0.2,
        // borderRightColor:'#1ca099', 
        // borderLeftColor: '#1ca099', 
        // borderTopColor:'#105955', 
        // borderBottomColor: '#105955', 
    }
})