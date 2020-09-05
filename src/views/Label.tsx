import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

const LabelWrapper = styled.main``;

const Label: React.FC = () => {
  const { tags, setTags } = useTags();
  return <Layout>标签</Layout>;
};

export default Label;
