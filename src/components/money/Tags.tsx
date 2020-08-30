import styled from "styled-components";
import React from "react";

const TagsWrapper = styled.section`
  margin-bottom: 10px;
  flex-grow: 1;
  position: relative;
  > ol {
    display: flex;
    > li {
      margin: 10px;
      background: #999;
      height: 20px;
      width: 40px;
      border-radius: 10px;
      text-align: center; /*水平居中*/
    }
  }
  > button {
    border: none;
    outline: none;
    background: none;
    position: absolute;
    bottom: 10px;
    margin-left: 10px;
    color: #666;
    border-bottom: 1px solid #999;
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
