import styled from "styled-components";
import React, { useEffect, useRef } from "react";
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
type Props = {
  className?: string;
};
const Layout: React.FC<Props> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!contentRef.current) return;
      contentRef.current.scrollTop = 9999;
    }, 0);
  });
  return (
    <Wrapper>
      <Content ref={contentRef} className={props.className}>
        {props.children}
      </Content>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
