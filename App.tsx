import Toast from "react-native-toast-message";
import Provider from "./shared/context/Provider";
import ApplicationRouter from "./routers/Routes";
import Layout from "./shared/component/Layout";
import { AxiosInterceptor } from "./shared/boiler/AxiosInterceptor";

export default function App() {
  return (
    <Provider>
      <AxiosInterceptor>
        <Layout>
          <ApplicationRouter />
        </Layout>
      </AxiosInterceptor>
      <Toast />
    </Provider>
  );
}

