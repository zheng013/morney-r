import styled from "styled-components";
import React, { useState, useRef, useCallback } from "react";

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
const Notes: React.FC = () => {
  const [notes, setNotes] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const blurFn = useCallback(() => {
    if (inputRef.current !== null) {
      setNotes(inputRef.current.value);
    }
    //(e)=>if(e.target!==null)setNotes(e.target.value)
  }, []);
  return (
    <NotesWrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          defaultValue={notes}
          ref={inputRef}
          onBlur={blurFn}
        />
      </label>
    </NotesWrapper>
  );
};
export { Notes };
