import { createStackNavigator, createAppContainer } from "react-navigation";
import { SplashScreen, LoginScreen } from "@app/screens";
import MainStack from "./MainStack";
import HistoryStack from "./HistoryStack";
import ProfileStack from "./ProfileStack";

const InitialStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Auth: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        Main: {
            screen: MainStack,
            navigationOptions: {
                header: null
            }
        },
        ...HistoryStack,
        ...ProfileStack
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(InitialStack);
