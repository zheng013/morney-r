import React from "react";
import styled from "styled-components";

const CategoryWrapper = styled.section`
  height: 64px;
  background: #999;
  vertical-align: center; /*垂直居中*/
  line-height: 64px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
    }
  }
`;
function Category() {
  return (
    <CategoryWrapper>
      <ul>
        <li>支出</li>
        <li>收入</li>
      </ul>
    </CategoryWrapper>
  );
}
export default Category;
