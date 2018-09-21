import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";

const gold = "#f7a81b";

const lessons = [
    {
        title:'Alfabeto',
        duration: '4 horas',
        img: require('../../Images/abc.png')
    },
    {
        title:'Números',
        duration: '4 horas',
        img: require('../../Images/numbers.png')
    },
    {
        title:'Fechas',
        duration: '4 horas',
        img: require('../../Images/calendar.png')
    },
    {
        title:'Cortesía',
        duration: '4 horas',
        img: require('../../Images/manners.png')
    },
    {
        title:'Lengua de Señas Mexicanas',
        duration: '4 horas',
        img: require('../../Images/ok.png')
    }
]

export default class Courses extends Component{
    static navigationOptions = {
        header :({navigation}) =>{
            return(
            <View style={{height:60, backgroundColor:gold, flexDirection:'row'}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'#c10042'}} onPress={() => {navigation.pop();}}>
                    <Icon name="arrow-back" color="#fff" size={40} containerStyle={{marginTop:10}} />
                </TouchableOpacity>
                <View style={{flex:5}}>
                    <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop:15, color:'#fff'}} >Básico</Text>
                </View>
            </View>
        )}
    }

    constructor(props) {
        super(props);
    }

    _renderCourses = () => {
      return lessons.map((item,index) => {
          return(
                <TouchableHighlight underlayColor="#136a66" key={index} style={[styles.buttonColor, {height: 50, marginVertical: 10, flex:1, marginHorizontal: 20}]}>
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
                </TouchableHighlight>
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