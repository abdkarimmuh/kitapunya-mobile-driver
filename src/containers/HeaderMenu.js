import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ToastAndroid } from "react-native";
import { HeaderMenuDefault } from "@app/components";
import { Api } from "@app/api";
import NavigationServices from "@app/services/NavigationServices";
import UserRedux from "@app/redux/user";

type Props = {
    token: string,
    resetUser: any => void,
}

class HeaderMenu extends PureComponent<Props> {

    constructor(props) {
        super(props)
        this.state = {
            error: true
        }
    }

    componentDidMount() {
    }

    pressEditProfile = () => {
        NavigationServices.navigate("EditProfile");
    }

    pressChangePassword = () => {
        NavigationServices.navigate("ChangePassword");
    }

    pressLogout = () => {
        this.props.resetUser();
        Api.get()
            .logout(this.props.token)
            .then(res => {
                if (res.status === 200) {
                    NavigationServices.resetStackNavigate(["Auth"]);
                } else if (res.status != 200) {
                    ToastAndroid.show("Tidak tersambung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true });
            });
    }

    render() {
        return (
            <View style={{ flexDirection: "row", marginRight: 12 }}>
                <HeaderMenuDefault
                    optionEditProfile={() => this.pressEditProfile()}
                    optionChangePassword={() => this.pressChangePassword()}
                    optionLogout={() => this.pressLogout()}
                    click={this.props.check}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
});

const mapDispatchToProps = dispatch => ({
    resetUser: () => dispatch(UserRedux.actions.resetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);