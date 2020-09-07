import styled from "styled-components";
import React from "react";
import Icon from "components/Icon";

const Nav = styled.nav`
  position: relative;
  font-size: 16px;
  background: #fff;
  width: 100%;
  padding: 16px;
  vertical-align: middle;
  text-align: center;
  > .icon {
    vertical-align: middle;
    left: 16px;
    position: absolute;
  }
`;

const TopBar: React.FC = () => {
  return (
    <Nav>
      <Icon name="left" />
      编辑标签
    </Nav>
  );
};
export { TopBar };
