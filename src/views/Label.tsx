import Layout from "components/Layout";
import React from "react";
import { Button } from "components/Button";
import { Labels } from "components/labels/Labels";
import { CenterSpace } from "components/CenterSpace";

const Label: React.FC = () => {
  return (
    <Layout>
      <Labels />
      <CenterSpace>
        <Button>新增标签</Button>
      </CenterSpace>
    </Layout>
  );
};

export default Label;
