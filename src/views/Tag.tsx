import React, { ChangeEventHandler } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  const { findTag, changeTag, deleteTag } = useTags();
  const { id } = useParams<Params>();
  const tag: string = findTag(parseInt(id));
  const rectHistory = useHistory();

  const changeFn: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeTag({ tag: e.target.value }, parseInt(id)); // 将e.target.value 放到一个引用对象上，保持非受控input的 非受控行
  };

  const deleteFn = () => {
    deleteTag(parseInt(id));
    //   //window 页面是否刷新 1.network有网络请求吗 2.入口文件index 有log吗  window.//history.back  useHistory()   .goBack()
    // ((linkRef.current as unknown) as HTMLButtonElement).click();
    rectHistory.goBack();
  };

  return (
    <Layout>
      <TopBar />
      <TagWrapper>
        <LabelInput
          label="标签名"
          type="text"
          value={tag} //解决warning 报错 index.js:1 Warning: A component is changing an {uncontrolled} input of type text to be controlled. 原来就是非受控 由于我们加了 value 变成受控了 需要将其改成defaultValue（可以和blur change配合）value受控只能和change受控配合   react里的change是input内容改变就执行函数     blur是非受控
          onChange={changeFn}
        />
      </TagWrapper>
      <CenterSpace>
        <Button onClick={deleteFn}>删除标签</Button>
      </CenterSpace>
    </Layout>
  );
};
export { Tag };
