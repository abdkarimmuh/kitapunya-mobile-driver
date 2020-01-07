import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "@app/assets/colors";

export default class CustomMenuHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabledEditProfile: false,
            disabledChangePassword: false,
            disabledLogout: false,
        }
    }

    _menu = null

    setMenuRef = ref => {
        this._menu = ref
    }

    showMenu = () => {
        this._menu.show()
    }

    hideMenu = () => {
        this._menu.hide()
    }

    optionEditProfile = () => {
        this.hideMenu()
        this.props.optionEditProfile()
        this.setState({
            disabledOptionEdit: true,
            disabledChangePassword: false,
            disabledLogout: false,
        })
    }

    optionChangePassword = () => {
        this.hideMenu()
        this.props.optionChangePassword()
        this.setState({
            disabledOptionEdit: false,
            disabledChangePassword: true,
            disabledLogout: false,
        })
    }

    optionLogout = () => {
        this.hideMenu()
        this.props.optionLogout()
        this.setState({
            disabledOptionEdit: false,
            disabledChangePassword: false,
            disabledLogout: true,
        })
    }

    render() {
        return (
            <Menu
                ref={this.setMenuRef}
                button={
                    <TouchableOpacity onPress={this.showMenu}>
                        <View style={{ padding: 12 }}>
                            <Icon
                                name="ellipsis-v"
                                color={Color.textColor}
                                size={16}
                            />
                        </View>
                    </TouchableOpacity>
                }>
                <MenuItem onPress={this.optionEditProfile} disabled={this.state.disabledEditProfile}>Edit Profil</MenuItem>
                <MenuItem onPress={this.optionChangePassword} disabled={this.state.disabledChangePassword}>Ganti Password</MenuItem>
                <MenuItem onPress={this.optionLogout} disabled={this.state.disabledLogout}>Logout</MenuItem>
                <MenuDivider />
            </Menu>
        )
    }
}