import { useState, useEffect } from "react";
import { getItem, setItem } from "utils/localStorage";
import { useUpdate } from "./useUpdate";

type RecordItem = {
  selectedTags: number[];
  notes: string;
  category: "+" | "-";
  amount: string;
  createAt: string; //8601
};
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    setItem("records", JSON.stringify(records));
  }, records);
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
  };
  return { records, addRecord };
};
export { useRecords };
