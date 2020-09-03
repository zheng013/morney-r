import React, { useState, useCallback } from "react";
import { PadWrapper } from "./NumberPad/PadWrapper";
import { computerNumber } from "./NumberPad/computerNumber";
const NumberPad: React.FC = () => {
  const [output, setOutput] = useState<string>("0");
  const addFn = (e: string) => {};

  const oneAddFn = useCallback(
    (e: React.MouseEvent) => {
      const content = (e.target as HTMLButtonElement).textContent;
      setOutput(computerNumber(content, output));
    },
    [output]
  );
  return (
    <PadWrapper>
      <div className="output">{output}</div>
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
