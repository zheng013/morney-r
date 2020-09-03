import React, { useState, useMemo } from "react";
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
  const [status, setStatus] = useState("-");
  const categoryList = useMemo<("+" | "-")[]>(() => ["-", "+"], []); // 相当于常量
  const categoryMap = useMemo(() => ({ "-": "支出", "+": "收入" }), []); // 相当于常量
  // ts的变量声明  type KeyType = keyof typeof categoryMap;
  return (
    <CategoryWrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={status === c ? "selected" : ""}
            onClick={() => setStatus(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </CategoryWrapper>
  );
};
export { Category };
