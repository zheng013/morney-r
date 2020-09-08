const getItem = (item: string) => {
  return window.localStorage.getItem(item);
};

const setItem = (item: string, content: string) => {
  window.localStorage.setItem(item, content);
};
export { getItem, setItem };
