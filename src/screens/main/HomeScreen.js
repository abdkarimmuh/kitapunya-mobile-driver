import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { 
    Text,
    Container,
    Card,
    Button
} from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";
import { Metrics } from "@app/themes";
import NavigationServices from "@app/services/NavigationServices";

const styles = StyleSheet.create({
    containerCard: {
        position: "absolute",
        top: 0,
        width: Metrics.DEVICE_WIDTH - 48,
        padding: 16,
        alignSelf: "center",
        elevation: 4
    },
    barMore: {
        width: "100%",
        height: 54,
        marginBottom: 70,
        backgroundColor: Color.primaryColor,
        elevation: 4
    },
    containerCardHeader: {
        marginHorizontal: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgTruck: {
        width: 76,
        height: 76
    },
    headerCardHeader: {
        fontSize: 18,
        fontWeight: "bold"
    },
    txtCardHeader: {
        fontSize: 14,
        fontWeight: "500",
    },
    txtHeaderList: {
        fontSize: 18,
        fontWeight: "bold",
        color: Color.grey,
        marginBottom: 12
    },
    containerCardItem: {
        marginVertical: 12,
        padding: 24,
        elevation: 4
    },
    txtTitleItem: {
        fontSize: 20,
        fontWeight: "bold"
    },
    txtHeaderItem: {
        marginTop: 16,
        fontSize: 12,
        color: Color.grey,
    },
    txtContentItem: {
        fontSize: 14,
        fontWeight: "500",
    },
});


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    pressDetail = () => {
        NavigationServices.navigate("Detail");
    }

    renderHeader = () => (
        <>
        <View style={styles.barMore}/>
        <Card style={styles.containerCard}>
            <View style={styles.containerCardHeader}>
                <View>
                    <Text style={styles.headerCardHeader}>Welcome</Text>
                    <Text style={styles.txtCardHeader}>Bima Sakti Siregar</Text>
                </View>
                <Image source={Images.icon.truck} style={styles.imgTruck}/>
            </View>
        </Card>
        </>
    )

    renderCard = () => (
        <Card style={styles.containerCardItem}>
            <Text style={styles.headerCardHeader}>Title</Text>
            <Text style={styles.txtHeaderItem}>Penjemputan</Text>
            <Text style={styles.txtContentItem}>Alamat Penjemputan</Text>
            <Text style={styles.txtHeaderItem}>Tujuan</Text>
            <Text style={styles.txtContentItem}>Alamat Tujuan</Text>
            <Button 
                style={{alignSelf: "flex-end"}}
                dark
                onPress={() => this.pressDetail()}>
                SELENGKAPNYA
            </Button>
        </Card>
    )

    render() {
        console.disableYellowBox = true;
        return (
            <ScrollView style={{flex: 1, backgroundColor: Color.backgroudDefault}}>
                {this.renderHeader()}
                <Container>
                    <Text style={styles.txtHeaderList}>List of Delivery</Text>
                    {this.renderCard()}
                    {this.renderCard()}
                </Container>
            </ScrollView>
        );
    }
}