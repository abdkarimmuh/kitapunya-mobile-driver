import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import { Container, Loading } from "@app/components";
import { HistoryItem, EmptyContent } from "@app/containers";
import Styles from "@app/assets/styles";
import NavigationServices from "@app/services/NavigationServices";

export default class HistoryScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            refreshHistory: false,
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

    render() {
        if (this.state.refreshHistory) {
            return (<Container><Loading /></Container>);
        } else if (this.state.history.length == 0) {
            return (<Container><EmptyContent /></Container>);
        } else {
            return (
                <ScrollView style={Styles.containerDefault}>
                    <Container>
                        <HistoryItem data={this.state.history} onPressDetail={this.pressDetail("id")} />
                    </Container>
                </ScrollView>
            );
        }
    }
}