import { StyleSheet } from "react-native";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";

export default StyleSheet.create({
    bgImage: {
        width: "100%",
        height: "100%",
    },
    login: {
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 24
    },
    imgLogin: {
        width: 150,
        height: 100,
        resizeMode: "contain",
        alignSelf: "center"
    },
    textInput: {
        marginBottom: 16
    },
    absoluteDriverInfo: {
        position: "absolute",
        bottom: 0,
        marginBottom: 12,
        width: 200,
        height: 20,
        resizeMode: "contain"
    }
});