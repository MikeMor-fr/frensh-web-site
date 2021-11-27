import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Burgers from "./pages/Burgers";
import EndSection from "./layouts/EndSection/EndSection";
import Salads from "./pages/Salads";
import Frites from "./pages/Frites";
import Assiettes from "./pages/Assiettes";
import HotDog from "./pages/HotDog";
import Sandwiches from "./pages/Sandwiches";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/menus/0' component={Burgers} />
          <Route path='/menus/1' component={Salads} />
          <Route path='/menus/2' component={Frites} />
          <Route path='/menus/3' component={Assiettes} />
          <Route path='/menus/4' component={HotDog} />
          <Route path='/menus/5' component={Sandwiches} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <EndSection />
    </div>
  );
}

export default App;
