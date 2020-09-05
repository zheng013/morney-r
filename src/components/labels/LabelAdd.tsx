import { CenterSpace } from "components/CenterSpace";
import { Button } from "components/Button";
import React from "react";

type Props = {
  tags: { id: number; tag: string }[];
  setTags?: (tags: { id: number; tag: string }[]) => void;
};
const LabelAdd: React.FC<Props> = (props) => {
  const { tags, setTags } = props;
  const addTag = () => {
    const tagName = window.prompt("请输入您要添加的标签名");
    if (tagName !== null && setTags) {
      setTags([...tags, { id: 6, tag: tagName }]);
    }
  };
  return (
    <CenterSpace>
      <Button onClick={addTag}>新增标签</Button>
    </CenterSpace>
  );
};

export { LabelAdd };
