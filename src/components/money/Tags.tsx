import styled from "styled-components";
import React from "react";

const TagsWrapper = styled.section`
  background: #ffffff;
  flex-grow: 1;
  position: relative;
  padding: 16px;
  > ol {
    margin: 0 -12px;
    > li {
      display: inline-block;
      margin: 8px 12px;
      background: #d9d9d9;
      padding: 3px 18px;
      border-radius: 18px;
      text-align: center; /*水平居中*/
      font-size: 14px;
    }
  }
  > button {
    border: none;
    outline: none;
    background: none;
    position: absolute;
    bottom: 16px;
    color: #666;
    padding: 2px 3px;
    border-bottom: 1px solid #333;
  }
`;
function Tags() {
  return (
    <TagsWrapper>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </TagsWrapper>
  );
}
export default Tags;
