import {  ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function useNavigate() {
    return useNavigation<StackNavigationProp<ParamListBase>>();
}