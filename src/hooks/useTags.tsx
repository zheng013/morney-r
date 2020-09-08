import { useState } from "react";
import { createId } from "utils/createId";
import { getItem, setItem } from "utils/localStorage";
import { useUpdate } from "./useUpdate";

type Tags = {
  tag: string;
  id: number;
};
//数据持久化 挂载时的初始化
let defaultTagList: Tags[] = [];
if (getItem("tags")) {
  defaultTagList = JSON.parse(getItem("tags") || "[]");
} else {
  defaultTagList = [
    { id: createId(), tag: "衣" },
    { id: createId(), tag: "食" },
    { id: createId(), tag: "住" },
    { id: createId(), tag: "行" },
  ];
  setItem("tags", JSON.stringify(defaultTagList));
}
const useTags = () => {
  //自定义hooks
  const [tags, setTags] = useState<Tags[]>(defaultTagList);
  useUpdate(() => {
    setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => {
    return tags.filter((t) => t.id === id)[0]?.tag;
  };
  const changeTag = (tag: string, id: number) => {
    setTags(tags.map((t) => (t.id === id ? { tag, id } : t)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((t) => t.id !== id));
  };
  return { tags, setTags, findTag, changeTag, deleteTag };
};
export { useTags };
