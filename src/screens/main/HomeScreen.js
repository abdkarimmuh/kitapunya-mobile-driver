import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { 
    Text,
    Title,
    DonationItem
} from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";



export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View>
                <Text>Ini Home</Text>
            </View>
        );
    }
}