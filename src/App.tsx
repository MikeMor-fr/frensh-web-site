import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Burgers from "./pages/Burgers";
import EndSection from "./layouts/EndSection/EndSection";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/menus/0' component={Burgers} />
          <Route path='/menus/1' component={Burgers} />
          <Route path='/menus/2' component={Burgers} />
          <Route path='/menus/3' component={Burgers} />
          <Route path='/menus/4' component={Burgers} />
          <Route path='/menus/5' component={Burgers} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <EndSection />
    </div>
  );
}

export default App;
