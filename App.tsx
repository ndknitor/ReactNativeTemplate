import Toast from "react-native-toast-message";
import Provider from "./shared/context/Provider";
import { AxiosInterceptor } from "./shared/component/AxiosInterceptor";
import Routers from "./Routes";
import Layout from "./shared/component/Layout";

export default function App() {
  return (
    <Provider>
      <AxiosInterceptor>
        <Routers />
      </AxiosInterceptor>
      <Toast />
    </Provider>
  );
}

