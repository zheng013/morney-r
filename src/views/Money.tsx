import Layout from "components/Layout";
import React, { useState } from "react";
import { NumberPad } from "components/money/NumberPad";
import { Tags } from "components/money/Tags";
import { Notes } from "components/money/Notes";
import { Category } from "components/money/Category";

const Money = () => {
  const [list, setList] = useState({
    selectedTags: [] as string[],
    notes: "",
    category: "-" as "+" | "-",
    amount: "0",
  });
  return (
    <Layout>
      <hr />
      {list.selectedTags}
      <hr />
      {list.notes}
      <hr />
      {list.category}
      <hr />
      {list.amount}
      <Tags
        value={list.selectedTags}
        setVal={(selectedTags: string[]) => {
          setList({
            ...list,
            selectedTags: selectedTags,
          });
        }}
      />
      <Notes
        value={list.notes}
        setVal={(notes: string) => {
          setList({ ...list, notes: notes });
        }}
      />
      <Category
        value={list.category}
        setVal={(category: "+" | "-") => {
          setList({ ...list, category: category });
        }}
      />
      <NumberPad
        value={list.amount}
        setVal={(amount: string) => setList({ ...list, amount: amount })}
      />
    </Layout>
  );
};

export default Money;
