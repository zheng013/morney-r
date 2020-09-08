import React, { forwardRef, useRef } from "react";
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
const TopBarR = forwardRef(TopBar as any);
const Tag: React.FC = () => {
  const { findTag, changeTag, deleteTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));

  const changeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTag(e.target.value, parseInt(id));
  };
  const linkRef: React.MutableRefObject<null> = useRef(null);

  const deleteFn = () => {
    deleteTag(parseInt(id));
    // if (linkRef !== null) {
    //   //window 页面是否刷新 1.network有网络请求吗 2.入口文件index 有log吗  window.history.back  useHistory()   .goBack()
    //   ((linkRef.current as unknown) as HTMLButtonElement).click();
    // }
  };

  return (
    <Layout>
      <TopBarR ref={linkRef} />
      <TagWrapper>
        <LabelInput label={"标签名"} value={tag} onChange={changeFn} />
      </TagWrapper>
      <CenterSpace>
        <Button onClick={deleteFn}>删除标签</Button>
      </CenterSpace>
    </Layout>
  );
};
export { Tag };
