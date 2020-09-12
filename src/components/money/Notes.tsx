import styled from "styled-components";
import React, { useRef, useCallback } from "react";

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
type Prop = {
  value: string;
  setVal: (notes: string) => void;
  onOK?: () => void;
};
const Notes: React.FC<Prop> = (props) => {
  const { value, setVal } = props;
  // const inputRef = useRef<HTMLInputElement>(null);
  // const blurFn = useCallback(() => {
  //   if (inputRef.current !== null) {
  //     setVal(inputRef.current.value);
  //   }
  //   //(e)=>if(e.target!==null)setNotes(e.target.value)
  // }, [setVal]);
  const changeFn = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setVal(e.target.value);
      //(e)=>if(e.target!==null)setNotes(e.target.value)
    },
    [setVal]
  );
  return (
    <NotesWrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          value={value}
          //ref={inputRef}
          onChange={changeFn}
        />
      </label>
    </NotesWrapper>
  );
};
export { Notes };
