import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/header';

const lessons = [
    {
        title:'Dolor',
        duration: '4 horas',
        img: require('../../Images/abc.png'),
        to: "hurts"
    },
    {
        title:'Sintomas',
        duration: '4 horas',
        img: require('../../Images/numbers.png'),
        to: "symptom"
    },
    {
        title:'Botiquin',
        duration: '4 horas',
        img: require('../../Images/calendar.png'),
        to: "firstaidkit"
    },
    {
        title:'Consulta',
        duration: '4 horas',
        img: require('../../Images/manners.png'),
        to: "consultation"
    },
    {
        title:'Hospital',
        duration: '4 horas',
        img: require('../../Images/ok.png'),
        to: "hospital"
    },
    {
        title:'Interno',
        duration: '4 horas',
        img: require('../../Images/ok.png'),
        to: "inside"
    },
    {
        title:'Cuerpo',
        duration: '4 horas',
        img: require('../../Images/ok.png'),
        to: "body"
    },
    {
        title:'Cara',
        duration: '4 horas',
        img: require('../../Images/ok.png'),
        to: "face"
    }
]

export default class Emergencys extends Component {
    static navigationOptions = {
        header :({navigation}) =>(
            <Header 
                title="Emergencias"
                leftIcon="arrow-back"
                leftAction={() => { navigation.pop()}}
            />
        )
    }

    render() {
        return (
            <View>
                <Text> Emergencias </Text>
            </View>
        )
    }
}
