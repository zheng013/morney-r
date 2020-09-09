import Layout from "components/Layout";
import React from "react";
import { Labels } from "components/labels/Labels";
import { LabelAdd } from "components/labels/LabelAdd";
import { useTags } from "hooks/useTags";
const Label: React.FC = () => {
  const { tags, addTag } = useTags();

  return (
    <Layout>
      <Labels tags={tags} />
      <LabelAdd addTag={addTag} />
    </Layout>
  );
};

export default Label;
