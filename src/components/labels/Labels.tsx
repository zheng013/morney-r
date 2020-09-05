import styled from "styled-components";
import Icon from "components/Icon";
import { useTags } from "hooks/useTags";
import React, { useContext } from "react";

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
type Props = {
  tags: string[];
  setTags?: () => void;
};
const Labels: React.FC<Props> = (props) => {
  const { tags } = props;
  return (
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
  );
};
export { Labels };
