import { CenterSpace } from "components/CenterSpace";
import { Button } from "components/Button";
import React from "react";

type Props = {
  //tags: { id: number; tag: string }[];
  addTag?: () => void;
};
const LabelAdd: React.FC<Props> = (props) => {
  const { addTag } = props;
  return (
    <CenterSpace>
      <Button onClick={addTag}>新增标签</Button>
    </CenterSpace>
  );
};

export { LabelAdd };
