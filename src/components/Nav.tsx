import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.33%;
      line-height: 56px;
      > a {
        padding: 16px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/record">记录页</Link>
        </li>
        <li>
          <Link to="/labels">标签页</Link>
        </li>
        <li>
          <Link to="/stactistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
