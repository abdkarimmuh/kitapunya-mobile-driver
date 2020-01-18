import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Text, View, ScrollView, Image, TouchableOpacity, ToastAndroid, Linking } from "react-native";
import { Container, Loading, Button } from "@app/components";
import Styles from "@app/assets/styles";
import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Api } from "@app/api";
import { STATUS_0, STATUS_1, STATUS_2, STATUS_3, BUTTON_0, BUTTON_1, BUTTON_2 } from "@app/assets/strings";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
}

class DetailHistoryScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            isLoading: true,
            data: {},
            isSubmit: false,
            error: false
        };
    }

    componentDidMount() {
        this.getDetailHistory();
        this.setState({ id: JSON.parse(JSON.stringify(this.props.navigation.getParam("id"))) })
    }

    getDetailHistory = async () => {
        this.setState({ isLoading: true });
        Api.get()
            .detailHistory(this.props.token, JSON.parse(JSON.stringify(this.props.navigation.getParam("id"))))
            .then(res => {
                console.log("res detail History", res);
                if (res.status === 200) {
                    this.setState({ data: res.data.data, isLoading: false });
                } else if (res.status != 200) {
                    this.setState({ isLoading: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, isLoading: false });
            });
    }

    pressMaps = (long, lat) => {
        if (long !== null && long != '' && lat !== null && lat != '') {
            // url = `https://www.google.com/maps/@${lat},${long}`;
            url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
            console.log(url);
            Linking.openURL(url).catch((err) => console.error('An error occurred', err));
        }
    }

    pressSubmit = async (id) => {
        this.setState({ isSubmit: true });
        Api.post()
            .delivery(this.props.token, id)
            .then(res => {
                console.log("res press", res);
                if (res.status === 200) {
                    this.setState({ isSubmit: false });
                    this.getDetailHistory();
                    ToastAndroid.show("Berhasil", ToastAndroid.SHORT);
                    this.onRefresh();
                } else if (res.status != 200) {
                    this.setState({ isSubmit: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, isSubmit: false });
            });
    }

    getLabelButton = (status) => {
        if (status == 2) {
            return BUTTON_0;
        } else if (status == 4) {
            return BUTTON_1;
        } else if (status == 5) {
            return BUTTON_2;
        } else {
            return "Not Found";
        }
    }

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

    renderDonatur = () => (
        <Container>
            <Text style={{ color: Color.grey }}>Pengirim</Text>
            <Text style={Styles.textNameDetail}>{this.state.data.donatur}</Text>
            <View style={[Styles.containerRowSpaceBetween, { marginTop: 16 }]}>
                <Text style={Styles.textAddressDetail}>{this.state.data.donatur_address}</Text>
                <TouchableOpacity onPress={() => this.pressMaps(this.state.data.donatur_long, this.state.data.donatur_lat)}>
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
            <Text style={Styles.textNameDetail}>{this.state.data.campaigner}</Text>
            <View style={[Styles.containerRowSpaceBetween, { marginTop: 16 }]}>
                <Text style={Styles.textAddressDetail}>{this.state.data.campaigner_address}</Text>
                <TouchableOpacity onPress={() => this.pressMaps(this.state.data.campaigner_long, this.state.data.campaigner_lat)}>
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
                    <Text style={Styles.textNoTrxDetail}>{this.state.data.no_trx}</Text>
                </View>
                <View>
                    <Text style={Styles.textStatusDetail}>Status Donasi</Text>
                    {this.renderStatus(this.state.data.status)}
                </View>
            </View>
        </Container>
    )

    renderButton = () => (
        <Container>
            <Button style={{ padding: 8, marginTop: 24, backgroundColor: Color.textColor }} mode="contained" dark
                onPress={() => this.pressSubmit(JSON.parse(JSON.stringify(this.props.navigation.getParam("id"))))}
                disabled={this.state.isSubmit}>{this.getLabelButton(this.state.data.status)}
            </Button>
        </Container>
    )

    render() {
        if (this.state.isLoading) {
            return (<Container><Loading /></Container>);
        } else {
            console.log("data : ", this.state.data);
            return (
                <ScrollView style={Styles.containerDefault}>
                    {this.renderDonatur()}
                    {this.renderCampaigner()}
                    <Container>
                        <Text style={{ color: Color.grey, marginTop: 12 }}>Barang yang harus diambil</Text>
                        {this.renderItems(this.state.data.items)}
                    </Container>
                    {this.renderItemBottom()}
                    {this.state.data.status < 6 && this.renderButton()}
                </ScrollView>
            );
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(DetailHistoryScreen)