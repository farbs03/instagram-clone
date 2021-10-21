import './App.css';
import {Switch, Route} from "react-router-dom"

import Navbar from "./Components/Shared/Navbar"

import Home from "./Components/Home"

function App() {
  return (
    <Switch>
      <Navbar>
        <Route exact path="/" component={Home} />
      </Navbar>
    </Switch>
  );
}

export default App;
