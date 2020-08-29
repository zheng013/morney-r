import React from "react";
import "App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Content>
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
        </Content>
        <Nav />
      </Wrapper>
    </Router>
  );
}
//path='/'必须在最后一个路由才生效 最为defalut的选项
//hashrouter history
function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
function Users() {
  return <div>Users</div>;
}
function Notmatch() {
  return <h2>您访问的页面不存在</h2>;
}
export default App;
