import React, { useRef, useMemo, useCallback } from "react";
import echarts from "echarts";
import { useUpdate } from "hooks/useUpdate";
import styled from "styled-components";

type Props = {
  option: any;
};
const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 6px 12px;
  background: #1a6ef0;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 99;
  &.open {
    top: 100%;
    margin-top: 20px;
  }
`;
const EchartLines: React.FC<Props> = (props) => {
  const lines = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const optionP = useMemo(() => {
    return props.option;
  }, [props.option]);
  const echart = useMemo(() => {
    const width = document.documentElement.clientWidth - 20;
    if (lines.current) {
      lines.current.style.display = "none";
      lines.current.style.margin = "0 auto";
      lines.current.style.width = width + "px";
      lines.current.style.height = 1.5 * width + "px";
      return echarts.init(lines.current, "dart");
    }
    // eslint-disable-next-line
  }, [lines.current]);
  useUpdate(() => {
    if (echart) {
      echart.setOption(optionP);
    }
  }, optionP);
  const toggleFn = useCallback(() => {
    const buttonD = button.current;
    if (buttonD && lines.current) {
      switch (buttonD.textContent) {
        case "展示图表":
          buttonD.textContent = "隐藏图表";
          buttonD.classList.add("open");
          lines.current.style.display = "block";
          break;
        case "隐藏图表":
          buttonD.textContent = "展示图表";
          buttonD.classList.remove("open");
          lines.current.style.display = "none";
          break;
        default:
          throw new Error();
      }
    }
  }, []);
  return (
    <Wrapper>
      <Button ref={button} onClick={toggleFn}>
        展示图表
      </Button>
      <div ref={lines}></div>
    </Wrapper>
  );
};
export { EchartLines };
