import React from "react";
import { EditProfileScreen, ChangePasswordScreen } from "@app/screens";
import { HeaderDetail } from "@app/components";
import Color from "@app/assets/colors";

export default {
    EditProfile: {
        screen: EditProfileScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Edit Profil</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    },
    ChangePassword: {
        screen: ChangePasswordScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Ganti Password</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    },
}