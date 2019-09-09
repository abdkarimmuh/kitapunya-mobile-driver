import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { 
    Text, Container, Button
} from "@app/components";

import Color from "@app/assets/colors";
import Images from "@app/assets/images";
import { Mock } from "@app/api";
import { LOREMIPSUM } from "@app/assets/strings";

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 14,
        color: Color.grey
    },
    txtComponentBold: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4,
    },
    txtComponent: {
        fontSize: 18,
        fontWeight: "500",
        marginTop: 4,
    },
    txtComponentSemi: {
        fontSize: 14,
        fontWeight: "500",
    },
    containerLocation: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24
    },
    imgMaps: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    containerBtnMaps: {
        alignSelf: "flex-end",
        padding: 12,
        backgroundColor: Color.primaryColor,
        borderRadius: 2,
        elevation: 4
    }
});

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    pressMaps = () => {}

    pressPickup = () => {}

    renderWho = () => (
        <>
        <Text style={styles.txtTitle}>Pengirim</Text>
        <Text style={styles.txtComponentBold}>Nama Pengirim</Text>
        <View style={{marginTop: 24}}/>
        <Text style={styles.txtTitle}>Penerima</Text>
        <Text style={styles.txtComponentBold}>Nama Penerima</Text>
        </>
    )

    renderLocation = () => (
        <View style={{ marginTop: 12 }}>
        <View style={styles.containerLocation}>
            <View style={{ width: "75%" }}>
                <Text style={styles.txtTitle}>Alamat Penjemputan</Text>
                <Text style={styles.txtComponent}>{LOREMIPSUM}</Text>
            </View>
            <TouchableOpacity
                onPress={() => this.pressMaps()}>
                <View style={styles.containerBtnMaps}>
                    <Image source={Images.icon.maps} style={styles.imgMaps}/>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.containerLocation}>
            <View style={{ width: "75%" }}>
                <Text style={styles.txtTitle}>Alamat Tujuan</Text>
                <Text style={styles.txtComponent}>{LOREMIPSUM}</Text>
            </View>
            <TouchableOpacity
                onPress={() => this.pressMaps()}>
                <View style={styles.containerBtnMaps}>
                    <Image source={Images.icon.maps} style={styles.imgMaps}/>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )

    renderItems = () => (
        <View style={{ marginTop: 36 }}>
            <Text style={styles.txtTitle}>Daftar Barang</Text>
            <View style={{ marginTop: 8 }}>
                <Text style={styles.txtComponentBold}>Mukena</Text>
                <Text style={styles.txtComponentSemi}>Jumlah : 20</Text>
            </View>
            <View style={{ marginTop: 8 }}>
                <Text style={styles.txtComponentBold}>Mukena</Text>
                <Text style={styles.txtComponentSemi}>Jumlah : 20</Text>
            </View>
        </View>
    )

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: Color.backgroudDefault}}>
                <Container>
                    {this.renderWho()}
                    {this.renderLocation()}
                    {this.renderItems()}
                    <Button 
                        mode="contained" 
                        dark
                        style={{ marginTop: 48, padding: 4}}
                        onPress={() => this.pressPickup()}>
                        PICKUP
                    </Button>
                </Container>
            </ScrollView>
        );
    }
}