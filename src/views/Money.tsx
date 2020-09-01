import Layout from "components/Layout";
import React from "react";
import { NumberPad } from "components/money/NumberPad";
import { Tags } from "components/money/Tags";
import { Notes } from "components/money/Notes";
import { Category } from "components/money/Category";

const Money = () => {
  return (
    <Layout>
      <Tags />
      <Notes />
      <Category />
      <NumberPad />
    </Layout>
  );
};

export default Money;
