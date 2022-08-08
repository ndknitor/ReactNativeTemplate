import Provider from "./context/Provider";
import ApplicationRouter from "./routers/ApplicationRouter";


export default function App() {
  return (
    <Provider>
      <ApplicationRouter />
    </Provider>
  );
}

