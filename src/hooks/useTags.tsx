import { useState } from "react";

type Tags = {
  tag: string;
  id: number;
};
const useTags = () => {
  //自定义hooks
  const [tags, setTags] = useState<Tags[]>([
    { id: 1, tag: "衣" },
    { id: 2, tag: "食" },
    { id: 3, tag: "住" },
    { id: 4, tag: "行" },
  ]);
  return { tags, setTags };
};
export { useTags };
