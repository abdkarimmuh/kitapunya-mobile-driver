import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderDetail, HeaderDefault } from "@app/components";
import { HomeScreen, DetailScreen, ProfileScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: <HeaderDefault />,
            headerStyle: {
            backgroundColor: Color.primaryColor,
            elevation: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0
            },
            shadowRadius: 0
            },
            headerTintColor: "#fff"
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Edit Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        }
    },
    Profil: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Edit Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.primaryColor
            },
            headerTintColor: "#fff"
        }
    },
});