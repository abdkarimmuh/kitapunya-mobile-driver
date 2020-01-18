import { StyleSheet } from "react-native";
import Color from "@app/assets/colors";
import { Metrics } from "@app/themes";

export default StyleSheet.create({

    //SplashScreen
    containerSplash: { flex: 1, justifyContent: "center", backgroundColor: Color.white },
    imageSplash: { width: "50%", height: "50%", resizeMode: "contain", alignSelf: "center" },
    imageTextLogoSplash: { position: "absolute", bottom: 0, alignSelf: "center", marginBottom: 24, width: 150, height: 20, resizeMode: "contain" },
    loadingSplash: { marginTop: 32, alignSelf: "center" },

    //AuthScreen
    containerAuth: { flex: 1, flexDirection: "column", justifyContent: "center", alignContent: "center", padding: 48 },
    textInputAuth: { marginBottom: 16 },
    bottomAuth: { flexDirection: "row", alignSelf: "center", marginTop: 32 },
    textAuthAuthGoTo: { marginLeft: 4, fontWeight: "bold" },
    imageAuth: { width: 250, height: 100, resizeMode: "contain", alignSelf: "center", marginBottom: 32 },

    //HomeScreen
    containerHeaderCardHome: { position: "absolute", top: 0, width: Metrics.DEVICE_WIDTH - 48, padding: 16, alignSelf: "center", elevation: 4, backgroundColor: Color.primaryColor },
    containerCardItemHome: { marginVertical: 12, padding: 24, elevation: 4 },
    barMoreHome: { width: "100%", height: 44, marginBottom: 44, backgroundColor: Color.white, elevation: 4 },
    imagePlaneHome: { width: 56, height: 56 },
    textHeaderHome: { fontSize: 20, fontWeight: "bold", color: Color.white },
    textHeaderNameHome: { fontSize: 16, fontWeight: "500", color: Color.white },
    textHeaderListHome: { fontSize: 20, fontWeight: "700", marginBottom: 12 },

    //DetailScreen
    textNameDetail: { color: Color.textColor, fontSize: 18, fontWeight: "bold" },
    buttonMapsDetail: { backgroundColor: Color.primaryColor, padding: 12, borderRadius: 2, opacity: 2 },
    imageMapsDetail: { height: 26, width: 26, resizeMode: "contain" },
    textAddressDetail: { width: Metrics.DEVICE_WIDTH - 48 - 50 - 12, height: "auto", color: Color.textColor },
    textNoTrxDetail: { color: Color.textColor, fontWeight: "bold" },
    textStatusDetail: { color: Color.grey, alignSelf: "flex-end", marginBottom: 4 },

    //Container
    cardPick: { elevation: 2, paddingVertical: 20, paddingHorizontal: 16, marginVertical: 12 },
    textPick: { fontWeight: "bold", color: Color.textColor },
    containerButtonPick: { paddingVertical: 6, paddingHorizontal: 16, borderRadius: 16, backgroundColor: Color.textColor },
    textButtonPick: { color: Color.white, fontSize: 12 },
    badgeStatus: { paddingVertical: 4, paddingHorizontal: 12, borderRadius: 16, },

    //Default
    containerDefault: { flex: 1, backgroundColor: Color.backgroudDefault },
    containerRow: { flexDirection: "row", justifyContent: "space-between" },
    containerRowCenter: { flexDirection: "row", alignItems: "center" },
    containerRowFlexEnd: { flexDirection: "row", alignSelf: "flex-end" },
    containerRowSpaceBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    iconDefault: { width: 20, height: 20, resizeMode: "contain" },
    imageProfile: { height: 80, width: 80, borderRadius: 40, elevation: 4, alignSelf: "center" },
    containerButtonForm: { flexDirection: "row", alignSelf: "flex-end", marginTop: 48 },
    buttonFormCancel: { marginRight: 16, backgroundColor: Color.grey },

});