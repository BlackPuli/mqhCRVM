import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'

const gold = "#f7a81b";

export default class DataList extends Component {
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
            data={this.props.data}
            renderItem={this._renderItem}
            numColumns={2}
            
          />
        </ScrollView>
      </View>
    )
  }
}
