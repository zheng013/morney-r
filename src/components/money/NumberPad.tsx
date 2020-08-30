import styled from "styled-components";
import React from "react";

const NumberPadWrapper = styled.section`
  > .output {
    height: 60px;
  }
  > .buttons {
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    > button {
      float: left;
      height: 60px;
      width: 25%;
      &.OK {
        float: right;
        height: 120px;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`;
function NumberPad() {
  return (
    <NumberPadWrapper>
      <div className="output"></div>
      <div className="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="OK">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadWrapper>
  );
}
export default NumberPad;
