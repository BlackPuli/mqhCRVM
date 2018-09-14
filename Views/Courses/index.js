import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';

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
                    <Text style={{fontSize: 30, textAlign:'center', fontWeight:'bold', marginTop:40}}>CURSO BÁSICO</Text>
                </View>
                <View style={{flex:4}}>
                    {this._renderCourses()}
                </View>
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    buttonColor:{
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