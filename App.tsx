import Toast from "react-native-toast-message";
import Provider from "./shared/context/Provider";
import Routers from "./Routes";

export default function App() {
  return (
    <Provider>
        <Routers />
      <Toast />
    </Provider>
  );
}

