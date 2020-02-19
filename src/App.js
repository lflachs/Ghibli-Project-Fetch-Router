import React from "react";
import Filmpage from "./Components/Filmpage";
import "./App.css";
import FilmList from "./Components/FilmList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FilmList}></Route>
        <Route path="/film/:id" component={Filmpage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
