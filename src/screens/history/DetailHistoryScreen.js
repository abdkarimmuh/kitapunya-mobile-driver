import React, { PureComponent } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Container, Loading, Button } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { STATUS_0, STATUS_1, STATUS_2, STATUS_3, BUTTON_0, BUTTON_1, BUTTON_2 } from "@app/assets/strings";

export default class DetailHistoryScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            refreshHistory: false,
            donatur: 'Zaskia Sungkar',
            donatur_address: 'Komplek Griya Tugu Asri, Blok BB 1, No 51, Tugu, Cimanggis, Depok',
            campaigner: 'Yayasan Mukena Bersih',
            campaigner_address: 'Jl. Setu Indah No.114, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat',
            items: [
                {
                    name: 'Mukena',
                    qty: 20
                },
                {
                    name: 'Sajadah',
                    qty: 10
                }
            ],
            no_trx: 'DLV1234567890',
            status: 1,
            isSubmit: false,
            error: false
        };
    }

    pressMaps = () => {

    }

    pressSubmit = (id) => {

    }

    getLabelButton = (status) => {
        if (status == 0) {
            return BUTTON_0;
        } else if (status == 1) {
            return BUTTON_1;
        } else if (status == 2) {
            return BUTTON_2;
        } else {
            return "Not Found";
        }
    }

    renderStatus = (status) => {
        if (status == 0) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status0 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_0}</Text>
                </View>
            )
        } else if (status == 1) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status1 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_1}</Text>
                </View>
            )
        } else if (status == 2) {
            return (
                <View style={[Styles.badgeStatus, { backgroundColor: Color.status2 }]}>
                    <Text style={Styles.textButtonPick}>{STATUS_2}</Text>
                </View>
            )
        } else if (status == 3) {
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

    renderDonatur = () => (
        <Container>
            <Text style={{ color: Color.grey }}>Pengirim</Text>
            <Text style={Styles.textNameDetail}>{this.state.donatur}</Text>
            <View style={[Styles.containerRowSpaceBetween, { marginTop: 16 }]}>
                <Text style={Styles.textAddressDetail}>{this.state.donatur_address}</Text>
                <TouchableOpacity onPress={() => this.pressMaps()}>
                    <View style={Styles.buttonMapsDetail}>
                        <Image source={Images.icon.mapWhite} style={Styles.imageMapsDetail} />
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    )

    renderCampaigner = () => (
        <Container>
            <Text style={{ color: Color.grey }}>Penerima</Text>
            <Text style={Styles.textNameDetail}>{this.state.campaigner}</Text>
            <View style={[Styles.containerRowSpaceBetween, { marginTop: 16 }]}>
                <Text style={Styles.textAddressDetail}>{this.state.campaigner_address}</Text>
                <TouchableOpacity onPress={() => this.pressMaps()}>
                    <View style={Styles.buttonMapsDetail}>
                        <Image source={Images.icon.mapWhite} style={Styles.imageMapsDetail} />
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    )

    renderItems = (items) => (
        <>
            {items.map((item, index) => (
                <View key={index} style={{ marginTop: 12 }}>
                    <Text style={Styles.textNameDetail}>{item.name}</Text>
                    <Text style={{ color: Color.textColor }}>Jumlah : {item.qty}</Text>
                </View>
            ))}
        </>
    )

    renderItemBottom = () => (
        <Container>
            <View style={Styles.containerRow}>
                <View>
                    <Text style={{ color: Color.grey }}>No Transaksi</Text>
                    <Text style={Styles.textNoTrxDetail}>{this.state.no_trx}</Text>
                </View>
                <View>
                    <Text style={Styles.textStatusDetail}>Status Donasi</Text>
                    {this.renderStatus(this.state.status)}
                </View>
            </View>
        </Container>
    )

    renderButton = () => (
        <Container>
            <Button style={{ padding: 8, marginTop: 24, backgroundColor: Color.textColor}} mode="contained" dark
                onPress={() => this.pressSubmit((JSON.parse(JSON.stringify(this.props.navigation.getParam("id")))))}
                disabled={this.state.isSubmit}>{this.getLabelButton(this.state.status)}
            </Button>
        </Container>
    )

    render() {
        if (this.state.refreshHistory) {
            return (<Container><Loading /></Container>);
        } else {
            return (
                <ScrollView style={Styles.containerDefault}>
                    {this.renderDonatur()}
                    {this.renderCampaigner()}
                    <Container>
                        <Text style={{ color: Color.grey, marginTop: 12 }}>Barang yang harus diambil</Text>
                        {this.renderItems(this.state.items)}
                    </Container>
                    {this.renderItemBottom()}
                    {this.state.status < 3 && this.renderButton()}
                </ScrollView>
            );
        }
    }
}