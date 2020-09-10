import Layout from "components/Layout";
import React, { useState } from "react";
import { NumberPad } from "components/money/NumberPad";
import { Tags } from "components/money/Tags";
import { Notes } from "components/money/Notes";
import { Category } from "components/money/Category";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";

//对自定义组件进行样式自定义
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const initialValue = {
  selectedTags: [] as number[],
  notes: "",
  category: "-" as "+" | "-",
  amount: "0",
};
const Money: React.FC = () => {
  const [list, setList] = useState(initialValue);
  const { addRecord } = useRecords();
  const allSetList = (props: Partial<typeof list>) => {
    setList({
      ...list,
      ...props,
    });
  };
  const submit = (e: React.MouseEvent) => {
    e.stopPropagation(); //防止事件冒泡  最后无法重置list列表值
    if (list.amount === "0") {
      return alert("请输入正确的金额");
    }
    if (list.selectedTags.length === 0) {
      return alert("请输入至少一个标签");
    }
    if (list.notes === "" || null) {
      return alert("请输备注");
    }
    addRecord({ ...list, createAt: JSON.stringify(new Date()) });
    alert("保存成功");
    setList(initialValue);
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
        onOK={submit}
      />
    </MyLayout>
  );
};

export default Money;
