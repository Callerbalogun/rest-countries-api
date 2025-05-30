import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rest-countries-api/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
