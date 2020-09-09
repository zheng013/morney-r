import { useState, useEffect } from "react";
import { createId } from "utils/createId";
import { getItem, setItem } from "utils/localStorage";
import { useUpdate } from "./useUpdate";

type Tags = {
  tag: string;
  id: number;
};
//数据持久化 挂载时的初始化

const useTags = () => {
  //自定义hooks
  const [tags, setTags] = useState<Tags[]>([]);
  useEffect(() => {
    let localTagList = JSON.parse(getItem("tags") || "[]");
    if (localTagList.length === 0) {
      localTagList = [
        { id: createId(), tag: "衣" },
        { id: createId(), tag: "食" },
        { id: createId(), tag: "住" },
        { id: createId(), tag: "行" },
      ];
    }
    setTags(localTagList);
  }, []); //初次挂载++++******
  useUpdate(() => {
    setItem("tags", JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => {
    return tags.filter((t) => t.id === id)[0]?.tag;
  };
  const changeTag = (tag: string, id: number) => {
    setTags(tags.map((t) => (t.id === id ? { tag, id } : t)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((t) => t.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("请输入您要添加的标签名");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), tag: tagName }]);
    }
  };
  return { tags, setTags, findTag, changeTag, deleteTag, addTag };
};
export { useTags };
