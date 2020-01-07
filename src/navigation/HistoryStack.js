import React from "react";
import { DetailHistoryScreen } from "@app/screens";
import { HeaderDetail } from "@app/components";
import Color from "@app/assets/colors";

export default {
    Detail: {
        screen: DetailHistoryScreen,
        navigationOptions: {
            headerTitle: <HeaderDetail>Detail</HeaderDetail>,
            headerStyle: {
                backgroundColor: Color.white,
                headerTintColor: Color.textColor,
            }
        }
    },
}