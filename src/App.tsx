import React from "react";
import "App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "views/Money";
import Label from "views/Label";
import Statistics from "views/Statistics";
import Notmatch from "views/Notmatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/record">
          <Money />
        </Route>
        <Route exact path="/labels">
          <Label />
        </Route>
        <Route exact path="/stactistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/record"></Redirect>
        <Route exact path="*">
          <Notmatch />
        </Route>
      </Switch>
    </Router>
  );
}
//path='/'必须在最后一个路由才生效 最为defalut的选项
//hashrouter history

export default App;
