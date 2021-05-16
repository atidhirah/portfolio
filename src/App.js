import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
