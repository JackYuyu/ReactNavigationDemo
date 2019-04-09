
import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import Home from  "../pages/Home"
import Lock from  "../pages/Lock"
import My from  "../pages/My"
import Details from  "../pages/Details"



// createBottomTabNavigator 底部导航
// createAppContainer  用来生成标签的

const stackHome  = createStackNavigator({
    Home: {
        screen: Home,
    },
    Details: {
        screen: Details,
        navigationOptions:{
            title:"Details",
            headerStyle: {
                backgroundColor: '#0499FF',
            },
        },

    },


})
// home ---> details


const BottomTab =    createBottomTabNavigator({

    Home: {
        screen: stackHome,
        navigationOptions: {
            tabBarLabel: '访客邀约',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    style={{width: 24, height:24}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />

            ),
        }


    },
    Lock: {
        screen: Lock,
        navigationOptions: {
            tabBarLabel: '访客邀约',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    style={{width: 24, height:24}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />

            ),
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '访客邀约',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    style={{width: 24, height:24}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />

            ),
        }

    },

})

const  BottomTabTag = createAppContainer(BottomTab);
export default  BottomTabTag







