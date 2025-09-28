import App from "./App.tsx";
import store from "./redux/store.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rest-countries-api/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
