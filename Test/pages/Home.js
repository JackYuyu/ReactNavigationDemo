import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title={"go to details"}
                        onPress={()=>{
                            this.props.navigation.navigate('Details',{
                                itemId: 86,
                                otherParam: 'anything you want here',
                            })
                        }}
                />


    <Text>home</Text>
        </View>
    );
    }
}
