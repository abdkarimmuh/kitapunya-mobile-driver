import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ScrollView, SafeAreaView, RefreshControl } from "react-native";
import { Container, Loading } from "@app/components";
import { HistoryItem, EmptyContent } from "@app/containers";
import Styles from "@app/assets/styles";
import { Api } from "@app/api";
import { NavigationServices } from "@app/services";

import UserRedux from "@app/redux/user";

type Props = {
    token: string,
}

class HistoryScreen extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {
            refreshingHistory: false,
            history: []
        };
    }

    componentDidMount() {
        this.getHistory();
    }

    onRefresh = () => {
        this.setState({ refreshingHistory: true });
        this.getHistory();
    }

    getHistory = async () => {
        this.setState({ refreshingHistory: true });
        Api.get()
            .history(this.props.token)
            .then(res => {
                console.log("res getItems", res);
                if (res.status === 200) {
                    this.setState({ history: res.data.data, refreshingHistory: false });
                } else if (res.status != 200) {
                    this.setState({ refreshingHistory: false });
                    ToastAndroid.show("Tidak dapat terhubung", ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                this.setState({ error: true, refreshingHistory: false });
            });
    }

    pressDetail = () => ({ id }) => {
        console.log("Detail Id : ", id);
        NavigationServices.navigate("Detail", { id: id });
    }

    render() {
        if (this.state.refreshingHistory) {
            return (<Container><Loading /></Container>);
        } else if (this.state.history.length == 0) {
            return (<Container><EmptyContent /></Container>);
        } else {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView style={Styles.containerDefault} refreshControl={
                        <RefreshControl refreshing={this.state.refreshingHistory} onRefresh={this.onRefresh.bind(this)} />
                    }>
                        <Container style={{ padding: 12 }}>
                            <HistoryItem data={this.state.history} onPressDetail={this.pressDetail("id")} />
                        </Container>
                    </ScrollView>
                </SafeAreaView>
            );
        }
    }
}

const mapStateToProps = state => ({
    token: UserRedux.selectors.token(state),
})

export default connect(mapStateToProps, null)(HistoryScreen)