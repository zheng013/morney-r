import Layout from "components/Layout";
import React, { useState, useMemo, useEffect } from "react";
import { Category } from "components/money/Category";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import dayjs from "dayjs";
import { useTags } from "hooks/useTags";
import { EchartLines } from "components/EchartLines";
import { EChartOption } from "echarts";
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
            dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
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
  const dateValueList = useMemo(() => {
    const today = new Date();
    const arr = [];
    for (let i = 0; i <= 29; i++) {
      const date = dayjs(today).subtract(i, "day").format("YYYY-MM-DD");
      const item = recordsShow.filter(
        (r) => dayjs(r.title).format("YYYY-MM-DD") === date
      )[0];
      arr.push({ date, value: item?.total });
    }
    return arr.reverse();
  }, [recordsShow, type]);
  const [option, setOption] = useState<EChartOption>({
    xAxis: {
      type: "category",
      data: recordsShow.map((r) => r.title),
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: "#1a6ef0",
        },
      },
    },
    tooltip: {
      show: true,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: recordsShow.map((r) => r.total),
        type: "line",
        symbol: "circle",
        symbolSize: 10, //圆点的半径
        itemStyle: {
          borderWidth: 4, //圆点的border
        },
        lineStyle: {
          width: 2,
        },
      },
    ],
  });
  useEffect(() => {
    setOption({
      xAxis: {
        type: "category",
        data: dateValueList.map((r) => r.date.slice(5)),
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: "#666",
          },
        },
      },
      tooltip: {
        show: true,
        position: "top",
      },
      yAxis: {
        type: "value",
      },
      dataZoom: [
        {
          type: "slider",
          start: 50,
          end: 100,
          maxValueSpan: "3600 * 24 * 1000 *5",
        },
      ],
      series: [
        {
          data: dateValueList.map((r) => r.value),
          type: "line",
          symbol: "circle",
          symbolSize: 10, //圆点的半径
          itemStyle: {
            borderWidth: 4,
            color: "#1a6ef0", //圆点的border
          },
          lineStyle: {
            width: 2,
          },
        },
      ],
    });
  }, [recordsShow]);
  return (
    <Layout>
      <MyCategory value={type} setVal={setType} />
      <Content>
        {recordsShow.length !== 0 ? (
          <>
            {recordsShow.map((r) => (
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
            ))}
            <EchartLines option={option} />
          </>
        ) : (
          <div>
            <span>无记账数据展示</span>
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default Statistics;
