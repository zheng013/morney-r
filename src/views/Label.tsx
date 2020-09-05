import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import { useTags } from "hooks/useTags";
import Icon from "components/Icon";

const LabelWrapper = styled.div`
  font-size: 16px;
  background: #fff;
  > ol {
    padding: 0 16px;
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #d9d9d9;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 6px 12px;
  background: #1a6ef0;
  border-radius: 4px;
  color: #fff;
`;
const CenterSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

const Label: React.FC = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <LabelWrapper>
        <ol>
          {tags.map((tag) => (
            <li key={tag}>
              <span>{tag}</span>
              <Icon name="right" />
            </li>
          ))}
        </ol>
      </LabelWrapper>
      <CenterSpace>
        <Button>新增标签</Button>
      </CenterSpace>
    </Layout>
  );
};

export default Label;
