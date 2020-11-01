import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Work from "./Work";
import Contact from "./Contact";
import AboutMe from "./About";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto flex-1 flex items-center">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={AboutMe} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
