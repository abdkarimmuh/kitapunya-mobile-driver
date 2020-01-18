import React, { PureComponent } from "react";
import { View } from "react-native";
import { Text, Card } from "@app/components";
import Color from "@app/assets/colors";
import Styles from "@app/assets/styles";
import { STATUS_0, STATUS_1, STATUS_2, STATUS_3 } from "@app/assets/strings";

export default class HistoryItem extends PureComponent {

    renderStatus = (status) => {
        if (status == 2) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status0 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_0}</Text>
                </View>
            )
        } else if (status == 4) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status1 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_1}</Text>
                </View>
            )
        } else if (status == 5) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status2 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_2}</Text>
                </View>
            )
        } else if (status == 6) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status3 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_3}</Text>
                </View>
            )
        } else {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.grey }]}>
                    <Text style={Styles.textButtonPick}>Status Not Found</Text>
                </View>
            )
        }
    }

    renderItem = ({ data }) => (
        data.map((item, index) => {
            if (item != null) {
                return (
                    <Card
                        style={Styles.cardPick}
                        onPress={() => this.props.onPressDetail({ id: item.id })}
                        key={index}>
                        <View style={Styles.containerRowSpaceBetween}>
                            <View style={Styles.containerRow}>
                                {item.items.map((item, index) => (
                                    <View style={Styles.containerRow} key={index}>
                                        {index != 0 && <Text style={Styles.textPick}>, </Text>}
                                        <Text style={Styles.textPick}>{item.qty} </Text>
                                        <Text style={Styles.textPick}>{item.name}</Text>
                                    </View>
                                ))}
                            </View>
                            {this.renderStatus(item.status)}
                        </View>
                    </Card>
                )
            }
        })
    )

    render() {
        return (
            <>
                {this.renderItem({ data: this.props.data })}
            </>
        );
    }
}