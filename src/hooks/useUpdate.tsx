import { useRef, useEffect } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  let mounting = useRef(true);
  useEffect(() => {
    if (mounting.current) {
      mounting.current = false;
      return;
    } else fn();
  }, deps);
};
export { useUpdate };
