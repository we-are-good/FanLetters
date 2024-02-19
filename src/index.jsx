import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";
import LetterContextProvider from "./context/LetterContext";
import MemberContextProvider from "./context/MemberContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemberContextProvider>
      <LetterContextProvider>
        <Router>
          <Home />
          <GlobalStyle />
        </Router>
      </LetterContextProvider>
    </MemberContextProvider>
  </React.StrictMode>
);

reportWebVitals();
