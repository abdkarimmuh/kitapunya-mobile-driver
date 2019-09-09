import React, { Component } from "react";
import { Image, ImageBackground, View } from "react-native";
import { 
    TextInputLoginRegister, 
    ButtonLoginRegister, 
    Container, 
    Text 
} from "@app/components";

import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

import NavigationServices from "@app/services/NavigationServices";

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onPressLogin = () => {
        console.log("Login " + this.state.email + " " + this.state.password)
        this.setState({
            email: "",
            password: ""
        })
        NavigationServices.resetStackNavigate(["Main"]);
    };

    renderInput = () => {
        return (
            <View>
                {TextInputLoginRegister(
                    "Email",
                    this.state.email,
                    (email) => { this.setState({ email }) }
                )}
                {TextInputLoginRegister(
                    "Password",
                    this.state.password,
                    (password) => { this.setState({ password }) }
                )}
            </View>
        )
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={Styles.bgImage}>
                <Container style={Styles.login}>
                    <Image source={Images.logo.iconHeader} style={Styles.imgLogin} />
                    {this.renderInput()}
                    {ButtonLoginRegister(
                        "LOGIN",
                        this.onPressLogin
                    )}
                </Container>
                <Image source={Images.logo.absoluteBottom} style={Styles.absoluteDriverInfo}/>
            </ImageBackground>
        );
    }
}