import React, { Component } from "react";
import { Image } from "react-native";
import Logo from "@app/assets/images";

export default class HeaderDefault extends Component {
    render() {
        return (
            <Image
                source={Logo.logo.banner}
                style={{ width: 120, height: 40, resizeMode: "contain", marginLeft: 16 }}
            />
        );
    }
}
