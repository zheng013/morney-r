import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Icon from "components/Icon";
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    height: 56px;
    > li {
      width: 33.33%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px;
        > span {
          margin-top: 4px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/record">
            <Icon name="money" />
            <span>记录页</span>
          </Link>
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
