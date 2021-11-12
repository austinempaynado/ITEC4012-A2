import logo from './logo.svg';
import './App.css';

import {NavBar} from "./components/nav/nav"
import {FeaturedCard} from "./components/featured-card/featured"
import {MovieCard} from "./components/movie-card/movie-card"
import { Home } from './components/pages/home/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home/>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
