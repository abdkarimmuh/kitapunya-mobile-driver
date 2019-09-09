import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SplashScreen, LoginScreen } from "@app/screens";
import MainStack from "./MainStack";

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
        }
    },
    {
        initialRouteName: "Splash"
    }
);

export default createAppContainer(InitialStack);
