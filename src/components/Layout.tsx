import styled from "styled-components";
import React, { useEffect } from "react";
import Nav from "./Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1;

  overflow: auto;
`;

const Layout = (props: any) => {
  useEffect(() => {
    document.querySelector("#ss")?.scrollTo(0, 9999);
  }, []);
  return (
    <Wrapper>
      <Content id="ss" className={props.className}>
        {props.children}
      </Content>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
