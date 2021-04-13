import React from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home.jsx";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Route, Switch,  } from "react-router-dom"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signup" component={Signup} exact/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
