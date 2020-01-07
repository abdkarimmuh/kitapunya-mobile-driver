import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@app/components";
import Styles from "@app/assets/styles";
import { EmptyContent } from "@app/containers";

export default class PickItem extends PureComponent {

    renderItem = ({ data }) => (
        data.map((item, index) => (
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
                    <TouchableOpacity onPress={() => this.props.onPressAdd({ id: item.id })}>
                        <View style={Styles.containerButtonPick}>
                            <Text style={Styles.textButtonPick}>Tambah</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Card>
        ))
    )

    render() {
        if (this.props.data == null || this.props.data.length == 0) {
            return (
                <EmptyContent content={"Belum barang yang harus di antar hari ini"} />
            );
        } else {
            return (
                <>
                    {this.renderItem({ data: this.props.data })}
                </>
            );
        }
    }
}