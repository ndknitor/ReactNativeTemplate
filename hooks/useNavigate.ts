import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function useNavigate()
{
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    return  navigation;
}