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
    bottom: 16px;
    margin-top: 20px;
    color: #666;
    padding: 0 2px;
    border-bottom: 1px solid #333;
  }
`;

type Prop = {
  value: number[];
  setVal: (selectedTag: number[]) => void;
};
const Tags: React.FC<Prop> = (props) => {
  const { tags, addTag } = useTags();
  const { value, setVal } = props;

  const toggleFn = (tagId: number) => {
    if (value.indexOf(tagId) >= 0) {
      setVal(value.filter((t) => t !== tagId));
    } else {
      setVal([...value, tagId]);
    }
  };
  const selectedClass = (tagId: number) => {
    return value
      .map((selectedTag) => (selectedTag === tagId ? "selected" : ""))
      .join("");
  };

  return (
    <TagsWrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              toggleFn(tag.id);
            }}
            className={selectedClass(tag.id)}
          >
            {tag.tag}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagsWrapper>
  );
};
export { Tags };
