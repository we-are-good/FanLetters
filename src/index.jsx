import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
