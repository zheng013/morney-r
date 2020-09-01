import styled from "styled-components";
import React from "react";

const NotesWrapper = styled.section`
  padding: 0 16px;
  /* vertical-align: center; 垂直居中
  line-height: 60px;*/
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      white-space: nowrap;
    }
    > input {
      margin-left: 16px;
      height: 72px;
      width: 100%;
      display: block;
      background: none;
      border: none;
      outline: none;
    }
  }
`;
function Notes() {
  return (
    <NotesWrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注" />
      </label>
    </NotesWrapper>
  );
}
export { Notes };
