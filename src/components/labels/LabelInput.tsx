import styled from "styled-components";
import React from "react";

const Label = styled.label`
  /* vertical-align: center; 垂直居中
  line-height: 60px;*/
  display: flex;
  align-items: center;
  font-size: 16px;
  > span {
    white-space: nowrap;
  }
  > input {
    margin-left: 16px;
    height: 44px;
    width: 100%;
    display: block;
    background: none;
    border: none;
    outline: none;
  }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const LabelInput: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  );
};

export { LabelInput };
