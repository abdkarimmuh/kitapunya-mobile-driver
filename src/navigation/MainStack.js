import React from "react";
import { Image } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation";
import { Text, HeaderDetail, HeaderDefault } from "@app/components";
import { HeaderMenu } from "@app/containers";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";

import { HomeScreen, HistoryScreen } from "@app/screens";

const Label = ({ text }) => (
    <Text style={{ fontSize: 12, color: Color.textColor, textAlign: "center", fontWeight: "bold" }}>
        {text}
    </Text>
);

const TabIcon = ({ name }) => ({ focused }) => {
    if (name == "home") {
        if (focused) {
            icon = Images.icon.home_active
        } else {
            icon = Images.icon.home
        }
    } else if (name == "archive") {
        if (focused) {
            icon = Images.icon.archive_active
        } else {
            icon = Images.icon.archive
        }
    }
    return (
        <Image source={icon} style={{ width: 24, height: 24, resizeMode: "cover" }} />
    )
};

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: <HeaderDefault />,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
                elevation: 0
            },
            headerRight: <HeaderMenu />,
        }
    }
});

const HistoryStack = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Riwayat</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    }
});


export default createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Beranda"} />,
                tabBarIcon: TabIcon({ name: "home" })
            }
        },
        History: {
            screen: HistoryStack,
            navigationOptions: {
                tabBarLabel: <Label text={"Riwayat"} />,
                tabBarIcon: TabIcon({ name: "archive" })
            }
        },
    },
    {
        shifting: true,
        barStyle: { backgroundColor: Color.white },
    }
);
