import React from "react";
import { useParams } from "react-router-dom";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { TopBar } from "components/labels/TopBar";
import styled from "styled-components";
import { Button } from "components/Button";
import { CenterSpace } from "components/CenterSpace";
import { LabelInput } from "components/labels/LabelInput";
type Params = {
  id: string;
};

const TagWrapper = styled.div`
  background: #fff;
  font-size: 16px;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));

  const changeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log((e.target as HTMLInputElement).value);
  };

  return (
    <Layout>
      <TopBar />
      <TagWrapper>
        <LabelInput label={"标签名"} value={tag} onChange={changeFn} />
      </TagWrapper>
      <CenterSpace>
        <Button>删除标签</Button>
      </CenterSpace>
    </Layout>
  );
};
export { Tag };
