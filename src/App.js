import logo from './logo.svg';
import './App.css';

import {NavBar} from "./components/nav/nav"
import {FeaturedCard} from "./components/featured-card/featured"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <FeaturedCard/>
      </Router>
    </div>
  );
}

export default App;
