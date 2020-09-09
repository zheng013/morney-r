import { setItem, getItem } from "./localStorage";

let id = parseInt(getItem("max_id") || "0");
const createId = () => {
  id++;
  setItem("max_id", JSON.stringify(id));
  return id;
};
export { createId };
