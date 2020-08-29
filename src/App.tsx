import React from "react";
import "App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/record">
          <Home />
        </Route>
        <Route exact path="/labels">
          <Users />
        </Route>
        <Route exact path="/stactistics">
          <About />
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
function Home() {
  return <Layout>Home</Layout>;
}

function About() {
  return <Layout>About</Layout>;
}
function Users() {
  return <Layout>Users</Layout>;
}
function Notmatch() {
  return <h2>您访问的页面不存在</h2>;
}
export default App;
