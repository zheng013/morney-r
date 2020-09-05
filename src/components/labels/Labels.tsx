import styled from "styled-components";
import Icon from "components/Icon";
import React from "react";
import { Link } from "react-router-dom";

const LabelWrapper = styled.div`
  font-size: 16px;
  background: #fff;
  > ol {
    padding: 0 16px;
    > li {
      border-bottom: 1px solid #d9d9d9;
      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
      }
    }
  }
`;
type Props = {
  tags: { id: number; tag: string }[];
  setTags?: () => void;
};
const Labels: React.FC<Props> = (props) => {
  const { tags } = props;
  return (
    <LabelWrapper>
      <ol>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"labels/" + tag.id}>
              <span>{tag.tag}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </ol>
    </LabelWrapper>
  );
};
export { Labels };
