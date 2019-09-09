import React, { Component } from "react";
import { Image } from "react-native";
import Logo from "@app/assets/images";

export default class HeaderDefault extends Component {
    render() {
        return (
            <Image
                source={Logo.logo.iconHeaderDriver}
                style={{ width: 200, height: 50, resizeMode: "contain", marginLeft: 16 }}
            />
        );
    }
}
