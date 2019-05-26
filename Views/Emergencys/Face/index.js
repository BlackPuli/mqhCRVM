import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DataList from '../../components/dataList';
import Header from '../../components/header';

const data = [
  {img: require('../../../Images/Cara/barbilla.png')},
  {img: require('../../../Images/Cara/boca.png')},
  {img: require('../../../Images/Cara/cejas.png')},
  {img: require('../../../Images/Cara/encias.png')},
  {img: require('../../../Images/Cara/frente.png')},
  {img: require('../../../Images/Cara/lengua.png')},
  {img: require('../../../Images/Cara/mejilla.png')},
  {img: require('../../../Images/Cara/nariz.png')},
  {img: require('../../../Images/Cara/ojos.png')},
  {img: require('../../../Images/Cara/oreja.png')},
  {img: require('../../../Images/Cara/pestañas.png')},
]

export default class Face extends Component {
  static navigationOptions = {
    header :({navigation}) =>(
        <Header 
            title="Cara"
            leftIcon="arrow-back"
            leftAction={() => { navigation.pop()}}
        />
    )
  }

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
        <DataList data={data} />
      </View>
    )
  }
}
