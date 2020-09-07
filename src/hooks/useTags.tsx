import { useState } from "react";
import { createId } from "utils/createId";

type Tags = {
  tag: string;
  id: number;
};
const tagList = [
  { id: createId(), tag: "衣" },
  { id: createId(), tag: "食" },
  { id: createId(), tag: "住" },
  { id: createId(), tag: "行" },
];
const useTags = () => {
  //自定义hooks
  const [tags, setTags] = useState<Tags[]>(tagList);
  const findTag = (id: number) => {
    return tags.filter((t) => t.id === id)[0]?.tag;
  };

  return { tags, setTags, findTag };
};
export { useTags };
