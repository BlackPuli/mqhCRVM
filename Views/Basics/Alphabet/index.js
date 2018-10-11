import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

const gold = "#f7a81b";

export default class Alphabet extends Component {
  static navigationOptions = {
    header :({navigation}) =>{
        return(
        <View style={{height:60, backgroundColor:gold, flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1, backgroundColor:'#c10042'}} onPress={() => {navigation.pop();}}>
                <Icon name="arrow-back" color="#fff" size={40} containerStyle={{marginTop:10}} />
            </TouchableOpacity>
            <View style={{flex:5}}>
                <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginTop:15, color:'#fff'}} >Alfabeto</Text>
            </View>
        </View>
    )}
}

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Afabeto </Text>
      </View>
    );
  }
}
