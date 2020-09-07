import React from "react";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  return <Layout>{tag}</Layout>;
};
export { Tag };
