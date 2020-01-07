import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Container, Card, Loading } from "@app/components";
import { PickItem, HistoryItem } from "@app/containers";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import NavigationServices from "@app/services/NavigationServices";

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshHistory: false,
            pick: [
                {
                    id: 1,
                    items: [
                        {
                            'qty': 1,
                            'name': 'Sepeda'
                        },
                        {
                            'qty': 2,
                            'name': 'Mainan'
                        },
                    ]
                },
                {
                    id: 2,
                    items: [
                        {
                            'qty': 10,
                            'name': 'Buku Tulis'
                        },
                    ]
                },
                {
                    id: 3,
                    items: [
                        {
                            'qty': 7,
                            'name': 'Buku Tulis'
                        },
                        {
                            'qty': 8,
                            'name': 'Buku Gambar'
                        },
                    ]
                },
            ],
            history: [
                {
                    id: 1,
                    status: 1,
                    items: [
                        {
                            'qty': 1,
                            'name': 'Sepeda'
                        },
                        {
                            'qty': 2,
                            'name': 'Mainan'
                        },
                    ],
                },
                {
                    id: 2,
                    status: 2,
                    items: [
                        {
                            'qty': 10,
                            'name': 'Buku Tulis'
                        },
                    ]
                },
            ]
        };
    }

    pressDetail = () => ({ id }) => {
        console.log("Detail Id : ", id);
        NavigationServices.navigate("Detail", { id: id });
    }

    pressAdd = () => ({ id }) => {
        console.log("Tambah Id : ", id);
    }

    renderHeader = () => (
        <>
            <View style={Styles.barMoreHome} />
            <Card style={Styles.containerHeaderCardHome}>
                <View style={[Styles.containerRowSpaceBetween, { marginHorizontal: 8 }]}>
                    <View>
                        <Text style={Styles.textHeaderHome}>Welcome</Text>
                        <Text style={Styles.textHeaderNameHome}>Bima Sakti Siregar</Text>
                    </View>
                    <Image source={Images.avatar.plane} style={Styles.imagePlaneHome} />
                </View>
            </Card>
        </>
    )

    renderHistory = () => {
        if (this.state.refreshHistory) {
            return (<Container><Loading /></Container>);
        } else {
            return (
                <Container>
                    <Text style={[Styles.textHeaderListHome, { color: Color.textColor }]}>Buat pengiriman baru</Text>
                    <PickItem data={this.state.pick} onPressAdd={this.pressAdd("id")} onPressDetail={this.pressDetail("id")} />
                </Container>
            );
        }
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={Styles.containerDefault}>
                {this.renderHeader()}
                <ScrollView style={Styles.containerDefault}>
                    {this.state.history.length != 0 &&
                        <Container>
                            <Text style={[Styles.textHeaderListHome, { color: Color.grey }]}>Barang yang harus diantar</Text>
                            <HistoryItem data={this.state.history} onPressDetail={this.pressDetail("id")} />
                        </Container>
                    }
                    {this.renderHistory()}
                </ScrollView>
            </View>
        );
    }
}