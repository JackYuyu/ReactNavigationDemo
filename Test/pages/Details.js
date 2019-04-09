import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Details extends Component {


    render() {

        console.log(this.props.navigation.getParam('itemId', 'NO-ID'))
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Details</Text>
            </View>
        );
    }
}


