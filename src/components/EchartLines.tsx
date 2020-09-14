import React, { useRef, useEffect, useMemo } from "react";
import echarts from "echarts";

type Props = {
  option: any;
};
const EchartLines: React.FC<Props> = (props) => {
  const lines = useRef<HTMLDivElement>(null)!;
  const optionP = useMemo(() => {
    return props.option;
  }, [props.option]);
  useEffect(() => {
    const width = document.documentElement.clientWidth - 20;
    if (lines.current) {
      lines.current.style.width = width + "px";
      lines.current.style.height = 1.5 * width + "px";
      const echart = echarts.init(lines.current, "dart");
      echart.setOption(optionP);
    }
  }, []);
  return <div ref={lines}></div>;
};
export { EchartLines };
