import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const HEIGHT_CAROUSEL = DEVICE_HEIGHT / 5;
const ITEM_DONATION = DEVICE_WIDTH / 4;

export default {
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
    HEIGHT_CAROUSEL,
    ITEM_DONATION
};
