import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderDetail } from "@app/components";
import { HomeScreen, DetailScreen, ProfileScreen } from "@app/screens";
import Color from "@app/assets/colors";

export default createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
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