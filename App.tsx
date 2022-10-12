import Toast from "react-native-toast-message";
import Provider from "./shared/context/Provider";
import ApplicationRouter from "./routers/Routes";
import { AxiosInterceptor } from "./shared/boiler/AxiosInterceptor";

export default function App() {
  return (
    <Provider>
      <AxiosInterceptor>
        <ApplicationRouter />
      </AxiosInterceptor>
      <Toast />
    </Provider>
  );
}

