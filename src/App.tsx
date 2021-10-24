import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/About";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto flex-1 flex">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
