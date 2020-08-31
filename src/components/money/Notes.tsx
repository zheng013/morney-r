import styled from "styled-components";
import React from "react";

const NotesWrapper = styled.section`
  height: 60px;
  vertical-align: center; /*垂直居中*/
  line-height: 60px;
  > label {
    margin-left: 10px;
    > input {
      margin-left: 10px;
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
export default Notes;
