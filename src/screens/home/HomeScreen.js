import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Image, ScrollView, SafeAreaView, RefreshControl, ToastAndroid } from "react-native";
import { Text, Container, Card, Loading } from "@app/components";
import { PickItem, HistoryItem } from "@app/containers";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import Styles from "@app/assets/styles";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
    name: string,
    setUser: any => void,
    resetUser: any => void,
}

class HomeScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            refreshingUser: false,
            refreshingItems: false,
            refreshingDelivery: false,
            items: [],
            delivery: [],
            error: false,
        };
    }

    componentDidMount() {
        this.getUser();
        this.getItems();
        this.getDelivery();
    }

    onRefresh = () => {
        this.setState({ refreshingUser: true, refreshingItems: true, refreshingDelivery: true });
        this.getUser();
        this.getItems();
        this.getDelivery();
    }

    getUser = async () => {
        this.props.resetUser();
        Api.get()
            .user(this.props.token)
            .then(res => {
                console.log("res getUser", res);
                if (res.status === 200) {
                    this.props.setUser(res.data.data);
                    this.setState({ refreshingUser: false });
                } else if (res.status != 200) {
                    this.setState({ refreshingUser: false });
                    NavigationServices.resetStackNavigate(["Auth"])
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                NavigationServices.resetStackNavigate(["Auth"]);
                this.setState({ error: true, refreshingUser: false });
            });
    }

    getItems = async () => {
        Api.get()
            .items(this.props.token)
            .then(res => {
                console.log("res getItems", res);
                if (res.status === 200) {
                    this.setState({ items: res.data.data, refreshingItems: false });
                } else if (res.status != 200) {
                    this.setState({ refreshingItems: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, refreshingItems: false });
            });
    }

    getDelivery = async () => {
        Api.get()
            .delivery(this.props.token)
            .then(res => {
                console.log("res getDelivery", res);
                if (res.status === 200) {
                    this.setState({ delivery: res.data.data, refreshingDelivery: false });
                } else if (res.status != 200) {
                    this.setState({ refreshingDelivery: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, refreshingDelivery: false });
            });
    }

    pressDetail = () => ({ id }) => {
        console.log("Detail Id : ", id);
        NavigationServices.navigate("Detail", { id: id });
    }

    pressAdd = () => ({ id }) => {
        console.log("Tambah Id : ", id);
        this.postDelivery(id);
    }

    postDelivery = async (id) => {
        this.setState({ refreshingItems: true });
        Api.post()
            .delivery(this.props.token, id)
            .then(res => {
                console.log("res press", res);
                if (res.status === 200) {
                    this.setState({ refreshingItems: false });
                    ToastAndroid.show("Berhasil", ToastAndroid.SHORT);
                    this.onRefresh();
                } else if (res.status != 200) {
                    this.setState({ refreshingItems: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, refreshingItems: false });
            });
    }

    renderHeader = () => (
        <>
            <View style={Styles.barMoreHome} />
            <Card style={Styles.containerHeaderCardHome}>
                <View style={[Styles.containerRowSpaceBetween, { marginHorizontal: 8 }]}>
                    <View>
                        <Text style={Styles.textHeaderHome}>Welcome</Text>
                        <Text style={Styles.textHeaderNameHome}>{this.props.name}</Text>
                    </View>
                    <Image source={Images.avatar.plane} style={Styles.imagePlaneHome} />
                </View>
            </Card>
        </>
    )

    renderHistory = () => {
        if (this.state.refreshingDelivery) {
            return (<Container><Loading /></Container>);
        } else {
            return (
                <Container>
                    <Text style={[Styles.textHeaderListHome, { color: Color.textColor }]}>Buat pengiriman baru</Text>
                    <PickItem data={this.state.items} onPressAdd={this.pressAdd("id")} onPressDetail={this.pressDetail("id")} />
                </Container>
            );
        }
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={Styles.containerDefault}>
                {this.renderHeader()}
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={Styles.containerDefault} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingUser && this.state.refreshingItems && this.state.refreshingDelivery} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        {this.state.delivery.length != 0 &&
                            <Container>
                                <Text style={[Styles.textHeaderListHome, { color: Color.grey }]}>Barang yang harus diantar</Text>
                                <HistoryItem data={this.state.delivery} onPressDetail={this.pressDetail("id")} />
                            </Container>
                        }
                        {this.renderHistory()}
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
    name: UserRedux.selectors.name(state),
})

const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(UserRedux.actions.setData({ data })),
    resetUser: () => dispatch(UserRedux.actions.resetUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)