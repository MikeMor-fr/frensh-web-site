import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menu";
import EndSection from "./layouts/EndSection/EndSection";

function App() {
  return (
    <div className='App'>
      <Router basename={"https://mikemor-fr.github.io/frensh-web-site/"}>
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/menus' component={Menus} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <EndSection />
    </div>
  );
}

export default App;
