import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
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