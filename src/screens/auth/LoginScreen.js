import React, { PureComponent } from "react";
import { Image, ImageBackground, View } from "react-native";
import { ButtonLoginRegister, TextInput } from "@app/components";
import { NavigationServices, AsyncStorage } from "@app/services";
import Styles from "@app/assets/styles";
import Images from "@app/assets/images";
import { darkTheme } from "@app/themes";

export default class LoginScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            email: "driver@example.com",
            password: "1234",
            error: false
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
                <TextInput label="Email" mode="outlined" theme={darkTheme} value={this.state.email} style={Styles.textInputAuth}
                    onChangeText={email => { this.setState({ email }) }}
                />
                <TextInput label="Password" mode="outlined" theme={darkTheme} value={this.state.password} style={Styles.textInputAuth} secureTextEntry
                    onChangeText={password => { this.setState({ password }) }}
                />
            </View>
        );
    }

    render() {
        return (
            <ImageBackground source={Images.background.backgroundLogin} style={Styles.containerAuth}>
                <Image source={Images.logo.bannerWhite} style={Styles.imageAuth} />
                {this.renderInput()}
                {ButtonLoginRegister("LOGIN", this.onPressLogin, this.state.isFetching)}
                <Image source={Images.logo.textLogoWhite} style={Styles.imageTextLogoSplash} />
            </ImageBackground>
        );
    }
}
