import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScreenParams } from "../routers/ApplicationRouter";

export default function useAppNavigation() {
    return useNavigation<NavigationProp<ScreenParams>>();
}
