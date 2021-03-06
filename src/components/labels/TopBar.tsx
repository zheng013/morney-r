import styled from "styled-components";
import React from "react";
import Icon from "components/Icon";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: relative;
  font-size: 16px;
  background: #fff;
  width: 100%;
  padding: 16px;
  vertical-align: middle;
  text-align: center;
  > a {
    vertical-align: middle;
    left: 16px;
    position: absolute;
  }
`;

const TopBar: React.FC = (props, ref) => {
  return (
    <Nav>
      <Link to="/labels">
        <Icon name="left" />
      </Link>
      编辑标签
    </Nav>
  );
};
export { TopBar };
