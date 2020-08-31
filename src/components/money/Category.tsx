import React, { useState } from "react";
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
      position: relative;
      &.selected::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: #1a6ef0;
      }
    }
  }
`;
const Category: React.FC = () => {
  const [status, setStatus] = useState("out");

  return (
    <CategoryWrapper>
      <ul>
        <li
          className={status === "out" ? "selected" : ""}
          onClick={() => setStatus("out")}
        >
          支出
        </li>
        <li
          className={status === "in" ? "selected" : ""}
          onClick={() => setStatus("in")}
        >
          收入
        </li>
      </ul>
    </CategoryWrapper>
  );
};
export default Category;
