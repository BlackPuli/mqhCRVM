import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, TouchableOpacity, Image, Easing, ScrollView, FlatList } from 'react-native'
import Header from '../components/header';

const gold = "#f7a81b";

const lessons = [
    {
        title:'Dolor',
        duration: '4 horas',
        img: require('../../Images/Dolores/cover.png'),
        to: "hurts"
    },
    {
        title:'Sintomas',
        duration: '4 horas',
        img: require('../../Images/Sintomas/cover.png'),
        to: "symptom"
    },
    // {
    //     title:'Botiquin',
    //     duration: '4 horas',
    //     img: require('../../Images/calendar.png'),
    //     to: "firstaidkit"
    // },
    // {
    //     title:'Consulta',
    //     duration: '4 horas',
    //     img: require('../../Images/manners.png'),
    //     to: "consultation"
    // },
    // {
    //     title:'Hospital',
    //     duration: '4 horas',
    //     img: require('../../Images/ok.png'),
    //     to: "hospital"
    // },
    // {
    //     title:'Interno',
    //     duration: '4 horas',
    //     img: require('../../Images/ok.png'),
    //     to: "inside"
    // },
    {
        title:'Cuerpo',
        duration: '4 horas',
        img: require('../../Images/Cuerpo/cover.png'),
        to: "body"
    },
    {
        title:'Cara',
        duration: '4 horas',
        img: require('../../Images/Cara/cover.png'),
        to: "Face"
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

  _renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        borderRadius: 15,
        backgroundColor: gold,
        flex: 1,
        height: 200,
        padding: 10,
        margin: 5,
      }}
      onPress={() => {
        this.props.navigation.push(item.to)
      }}
    >
      <Image 
        source={item.img} 
        resizeMode='contain'
        style={{
          height: 180,
          flex: 1,
          alignSelf: 'center',
          borderRadius: 15
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>  
  )  

  render(){
    return(
      <View
        style={{
          flex:1,
          backgroundColor:'#f4f4f4'
        }}
      >
        <ScrollView style={{flex:1}}>
          <FlatList
            style={{ paddingHorizontal: 5, marginTop: 5 }}
            data={lessons}
            renderItem={this._renderItem}
            numColumns={2}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  buttonColor:{
    backgroundColor:gold, 
    marginHorizontal:5,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  }
})