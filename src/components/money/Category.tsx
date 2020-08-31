import React, { useState } from "react";
import styled from "styled-components";

const CategoryWrapper = styled.section`
  background: #c4c4c4;
  font-size: 24px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      padding: 16px 0;
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
