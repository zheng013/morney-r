import Layout from "components/Layout";
import React, { useState } from "react";
import { NumberPad } from "components/money/NumberPad";
import { Tags } from "components/money/Tags";
import { Notes } from "components/money/Notes";
import { Category } from "components/money/Category";
import styled from "styled-components";

//对自定义组件进行样式自定义
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Money: React.FC = () => {
  const [list, setList] = useState({
    selectedTags: [] as number[],
    notes: "",
    category: "-" as "+" | "-",
    amount: "0",
  });
  const allSetList = (props: Partial<typeof list>) => {
    setList({
      ...list,
      ...props,
    });
  };
  return (
    <MyLayout>
      <Tags
        value={list.selectedTags}
        setVal={(selectedTags) => {
          allSetList({ selectedTags });
        }}
      />
      <Notes
        value={list.notes}
        setVal={(notes) => {
          allSetList({ notes });
        }}
      />
      <Category
        value={list.category}
        setVal={(category) => {
          allSetList({ category });
        }}
      />
      <NumberPad
        value={list.amount}
        setVal={(amount) => allSetList({ amount })}
      />
    </MyLayout>
  );
};

export default Money;
