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
        paddingHorizontal: 32,
        paddingTop: 24,
        paddingBottom: 32
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
        marginBottom: 16,
        width: 150,
        height: 20,
        resizeMode: "contain",
        alignSelf: "center"
    }
});