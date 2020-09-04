import React, { useCallback } from "react";
import { PadWrapper } from "./NumberPad/PadWrapper";
import { computerNumber } from "./NumberPad/computerNumber";

type Prop = {
  value: string;
  setVal: (amount: string) => void;
};
const NumberPad: React.FC<Prop> = (props) => {
  const { value, setVal } = props;
  const addFn = (e: string) => {};

  const oneAddFn = useCallback(
    (e: React.MouseEvent) => {
      const content = (e.target as HTMLButtonElement).textContent;
      setVal(computerNumber(content, value));
    },
    [value, setVal] //若不加setval 会保存了之前的原始值
  );
  return (
    <PadWrapper>
      <div className="output">{value}</div>
      <div className="buttons" onClick={oneAddFn}>
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
        <button onClick={() => addFn(".")}>.</button>
      </div>
    </PadWrapper>
  );
};
export { NumberPad };
