import { message } from "antd";
import { useEffect } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import store, { Provider } from "./store";
/**
 * Entry point for route component
 * @returns JSX Element represents for route components
 */
const Main = () => {
  useEffect(() => {
    message.config({
      top: 100,
      duration: 2,
      maxCount: 1,
    });
  }, []);
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
