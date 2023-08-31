import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/index";
import reportWebVitals from "./reportWebVitals";

import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();
