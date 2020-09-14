import Layout from "components/Layout";
import React, { useState, useMemo } from "react";
import { Category } from "components/money/Category";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import dayjs from "dayjs";
import { useTags } from "hooks/useTags";
import { EchartLines } from "components/EchartLines";
const MyCategory = styled(Category)`
  background: #fff;
`;
//flex 的布局自定义margin-* 有任意一个auto 其余也可以自定义布局
const Content = styled.ol`
  font-size: 18px;
  > div {
    text-align: center;
    margin-top: 20px;
  }
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
  }[];
  type RecordItem = {
    selectedTags: number[];
    notes: string;
    category: "+" | "-";
    amount: string;
    createAt: string;
    //ISO8601
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
          });
        }
      }
      //无返回值 forEach map有返回值
      recordItemList.forEach((group) => {
        group.total = group.items.reduce(
          (sum, item) => (sum += parseFloat(item.amount)),
          0
        );
      });
      return recordItemList;
    } else {
      return [];
    }
  }, [records, type]);
  const [option, setOption] = useState({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  });
  return (
    <Layout>
      <MyCategory value={type} setVal={setType} />
      <Content>
        {recordsShow.length !== 0 ? (
          recordsShow.map((r) => (
            <li key={r.title}>
              <div className="title">
                <span>{r.title}</span>
                <span>{"￥" + r.total}</span>
              </div>

              <ol>
                {r.items.map((i, index) => (
                  <li key={index}>
                    <span>{dayjs(i.createAt).format("hh:mm:ss")}</span>
                    <span className="type">
                      {selectedTagName(i.selectedTags) || ""}
                    </span>
                    <span className="notes">{i.notes}</span>
                    <span>{"￥" + i.amount}</span>
                  </li>
                ))}
              </ol>
            </li>
          ))
        ) : (
          <div>
            <span>无记账数据展示</span>
            <EchartLines option={option} />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default Statistics;
