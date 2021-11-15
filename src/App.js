import logo from "./logo.svg";
import "./App.css";

import { NavBar } from "./components/nav/nav";
import { FeaturedCard } from "./components/featured-card/featured";
import { MovieCard } from "./components/movie-card/movie-card";
import { Home } from "./components/pages/home/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/pages/login/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
