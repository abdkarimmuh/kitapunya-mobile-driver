import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import Logo from "@app/assets/images";
import NavigationServices from "@app/services/NavigationServices";
import Styles from "@app/assets/styles";

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            NavigationServices.resetStackNavigate(["Auth"]);
        }, 3000);
    }

    render() {
        console.disableYellowBox = true
        return (
            <View style={Styles.containerSplash}>
                <Image source={Logo.logo.logo} style={Styles.imageSplash} />
                <Image source={Logo.logo.textLogo} style={Styles.imageTextLogoSplash} />
            </View>
        );
    }
}