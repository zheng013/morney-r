import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Icon from "components/Icon";
const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: #fff;
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
        &.selected {
          color: #1a6ef0;
          > .icon {
            fill: #1a6ef0;
          }
        }
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
          <NavLink to="/record" activeClassName="selected">
            <Icon name="money" />
            <span>记录页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/labels" activeClassName="selected">
            <Icon name="label" />
            <span>标签页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stactistics" activeClassName="selected">
            <Icon name="TaskStatistics" />
            <span>统计页</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
