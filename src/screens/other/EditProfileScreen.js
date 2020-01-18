import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ToastAndroid } from "react-native";
import { Container, TextInput, Button } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";

import UserRedux from "@app/redux/user";

const Divider = (
    <View style={{ marginVertical: 6 }}></View>
);

type Props = {
    name: string,
    email: string,
    token: string,
}

class EditProfileScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            error: false,
            name: "",
            email: "",
        };
    }

    componentDidMount() {
        this.setState({ name: this.props.name, email: this.props.email });
    }

    updateUser = async () => {
        Api.post()
            .updateProfile(this.props.token, this.state.name, this.state.email)
            .then(res => {
                console.log("res updateUser", res);
                if (res.status === 200) {
                    this.setState({ isFetching: false });
                    ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
                    NavigationServices.resetStackNavigate(["Main"]);
                } else if (res.status == 401) {
                    this.setState({ isFetching: false });
                    ToastAndroid.show(res.data.error, ToastAndroid.SHORT);
                } else {
                    this.setState({ isFetching: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                ToastAndroid.show("Error", ToastAndroid.SHORT);
                this.setState({ error: true, isFetching: false });
            });
    }

    renderButtonSubmit = () => (
        <View style={Styles.containerButtonForm}>
            <Button mode="contained" onPress={() => (NavigationServices.goBack())} dark
                style={Styles.buttonFormCancel} >BATAL</Button>
            <Button mode="contained" onPress={() => (this.updateUser())} dark
                disabled={this.state.isFetching} >SIMPAN</Button>
        </View>
    );

    render() {
        return (
            <View style={Styles.containerDefault}>
                <Container>
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Name"
                        value={this.state.name}
                        onChangeText={name => this.setState({ name: name })}
                    />
                    {Divider}
                    <TextInput
                        style={{ backgroundColor: Color.transparent }}
                        label="Email"
                        keyboardType={"email-address"}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                    />
                    {this.renderButtonSubmit()}
                </Container>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
    email: UserRedux.selectors.email(state),
})

export default connect(mapStateToProps, null)(EditProfileScreen)