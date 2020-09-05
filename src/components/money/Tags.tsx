import styled from "styled-components";
import React from "react";
import { useTags } from "hooks/useTags";

const TagsWrapper = styled.section`
  background: #ffffff;
  flex-grow: 1;
  position: relative;
  padding: 16px;
  > ol {
    margin: 0 -12px;
    > li {
      display: inline-block;
      margin: 8px 12px;
      background: #d9d9d9;
      padding: 3px 18px;
      border-radius: 18px;
      text-align: center; /*水平居中*/
      font-size: 14px;
      &.selected {
        background: #1a6ef0;
        color: #fff;
      }
    }
  }
  > button {
    border: none;
    outline: none;
    background: none;
    position: absolute;
    bottom: 16px;
    color: #666;
    padding: 0 2px;
    border-bottom: 1px solid #333;
  }
`;

type Prop = {
  value: string[];
  setVal: (selectedTag: string[]) => void;
};
const Tags: React.FC<Prop> = (props) => {
  const { tags, setTags } = useTags();
  const { value, setVal } = props;
  const addFn = () => {
    const tagName = window.prompt("请输入您要添加的标签名");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const toggleFn = (tag: string) => {
    if (value.indexOf(tag) >= 0) {
      setVal(value.filter((t) => t !== tag));
    } else {
      setVal([...value, tag]);
    }
  };
  const selectedClass = (tag: string) => {
    return value
      .map((selectedTag) => (selectedTag === tag ? "selected" : ""))
      .join("");
  };

  return (
    <TagsWrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              toggleFn(tag);
            }}
            className={selectedClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={addFn}>新增标签</button>
    </TagsWrapper>
  );
};
export { Tags };
