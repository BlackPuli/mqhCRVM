import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const gold = "#f7a81b";

export default class Header extends Component {
    render() {
        return (
            <View
                style={{
                    height:60,
                    backgroundColor:gold,
                    flexDirection:'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        flex:1,
                        backgroundColor:'#c10042'
                    }}
                    onPress={this.props.leftAction}
                >
                    <Icon 
                        name={this.props.leftIcon}
                        color="#fff"
                        size={40}
                        containerStyle={{marginTop:10}}
                    />
                </TouchableOpacity>
                <View style={{flex:5}}>
                    <Text 
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop:15,
                            color:'#fff'
                        }}
                    >
                        {this.props.title}
                    </Text>
                </View>
            </View>
        )
    }
}
