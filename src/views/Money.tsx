import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const Tags = styled.section`
  margin-bottom: 10px;
  flex-grow: 1;
  > ol {
    display: flex;
    > li {
      margin: 10px;
      background: #999;
      height: 20px;
      width: 40px;
      border-radius: 10px;
      text-align: center; /*水平居中*/
    }
  }
  > button {
    border: none;
    outline: none;
    background: none;
    margin-left: 10px;
    color: #666;
    border-bottom: 1px solid #999;
  }
`;
const Notes = styled.section`
  height: 60px;
  background: #eee;
  vertical-align: center; /*垂直居中*/
  line-height: 60px;
  > label {
    margin-left: 10px;
    > input {
      margin-left: 10px;
      background: none;
      border: none;
      outline: none;
    }
  }
`;
const Category = styled.section`
  height: 64px;
  background: #999;
  vertical-align: center; /*垂直居中*/
  line-height: 64px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
    }
  }
`;
const NumberPad = styled.section`
  > .output {
    height: 60px;
  }
  > .buttons {
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    > button {
      float: left;
      height: 60px;
      width: 25%;
      &.OK {
        float: right;
        height: 120px;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`;

const Money = () => {
  return (
    <Layout>
      <Tags>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </Tags>
      <Notes>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </Notes>
      <Category>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </Category>
      <NumberPad>
        <div className="output"></div>
        <div className="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="OK">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPad>
    </Layout>
  );
};

export default Money;
