import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menu";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/menus' component={Menus} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
