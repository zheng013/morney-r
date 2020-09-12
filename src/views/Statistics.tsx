import Layout from "components/Layout";
import React, { useState, useMemo } from "react";
import { Category } from "components/money/Category";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import dayjs from "dayjs";
import { useTags } from "hooks/useTags";
const MyCategory = styled(Category)`
  background: #fff;
`;
//flex 的布局自定义margin-* 有任意一个auto 其余也可以自定义布局
const Content = styled.ol`
  font-size: 18px;
  > li {
    .title {
      display: flex;
      justify-content: space-between;
      line-height: 20px;
      padding: 10px 16px;
    }
    > ol {
      > li {
        display: flex;
        justify-content: space-between;
        background: #fff;
        line-height: 20px;
        padding: 10px 16px;
        > .notes {
          margin-right: auto;
          margin-left: 16px;
          color: #999;
        }
        > .type {
          margin-left: 16px;
        }
      }
    }
  }
`;

const Statistics = () => {
  const [type, setType] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { selectedTagName } = useTags();
  type NewRecordItem = {
    title: string;
    total?: number;
    items: typeof records;
    time: string;
  }[];
  type RecordItem = {
    selectedTags: number[];
    notes: string;
    category: "+" | "-";
    amount: string;
    createAt: string; //ISO8601
  };
  const recordsShow = useMemo(() => {
    if (records.length !== 0) {
      const cloneRecords = JSON.parse(JSON.stringify(records));
      const newRecordList = cloneRecords
        .filter((record: RecordItem) => record.category === type)
        .sort(
          (a: RecordItem, b: RecordItem) =>
            dayjs(a.createAt).valueOf() - dayjs(b.createAt).valueOf()
        );
      if (newRecordList.length === 0) {
        return [];
      }
      const recordItemList: NewRecordItem = [
        {
          title: dayjs(newRecordList[0].createAt).format("YYYY-MM-DD"),
          items: [newRecordList[0]],
          time: dayjs(newRecordList[0].createAt).format("hh:mm:ss"),
        },
      ];
      for (let i = 1; i < newRecordList.length; i++) {
        const current = newRecordList[i];
        const last = recordItemList[recordItemList.length - 1];
        if (dayjs(current.createAt).isSame(dayjs(last.title), "day")) {
          last.items.push(newRecordList[i]);
        } else {
          recordItemList.push({
            title: dayjs(current.createAt).format("YYYY-MM-DD"),
            items: [current],
            time: dayjs(current.createAt).format("hh:mm:ss"),
          });
        }
      }
      recordItemList.map((group) => {
        group.total = group.items.reduce(
          (sum, item) => (sum += parseFloat(item.amount)),
          0
        );
      });
      return recordItemList;
    } else {
      return [];
    }
  }, [records]);
  return (
    <Layout>
      <MyCategory value={type} setVal={setType} />
      <Content>
        {recordsShow.map((r) => (
          <li>
            <div className="title">
              <span>{r.title}</span>
              <span>{"￥" + r.total}</span>
            </div>

            <ol>
              {r.items.map((i) => (
                <li>
                  <span>{r.time}</span>
                  <span className="type">
                    {selectedTagName(i.selectedTags) || ""}
                  </span>
                  <span className="notes">{i.notes}</span>
                  <span>{"￥" + i.amount}</span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </Content>
    </Layout>
  );
};

export default Statistics;
