import Layout from "components/Layout";
import React, { createContext } from "react";
import { Labels } from "components/labels/Labels";
import { LabelAdd } from "components/labels/LabelAdd";
import { useTags } from "hooks/useTags";
const Label: React.FC = () => {
  const { tags, setTags } = useTags();

  return (
    <Layout>
      <Labels tags={tags} />
      <LabelAdd tags={tags} setTags={setTags} />
    </Layout>
  );
};

export default Label;
