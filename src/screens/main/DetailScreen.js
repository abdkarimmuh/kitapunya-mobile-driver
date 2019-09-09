import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { 
    Text,
} from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";


export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View>
                <Text>Ini Detail</Text>
            </View>
        );
    }
}