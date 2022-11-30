import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Home from "components/pages/Home";
import About from "components/pages/About";
import ProductDetail from "components/pages/ProductDetail";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
