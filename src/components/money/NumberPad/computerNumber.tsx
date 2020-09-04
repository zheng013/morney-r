const computerNumber = (content: string | null, output: string) => {
  if (content === null) {
    return "0";
  } else if ("0123456789.".indexOf(content) >= 0) {
    if (output.length >= 16) {
      return output;
    }
    if (output === "0") {
      if (content !== ".") {
        return content;
      } else {
        return output + content;
      }
    }
    if (output.indexOf(".") >= 0 && content === ".") {
      return output;
    }

    return output + content;
  } else {
    switch (content) {
      case "删除":
        if (output.length === 1) {
          return "0";
        } else {
          return output.slice(0, -1);
        }
      case "清空":
        return "0";
      case "OK":
        //  TODO  搜四个部分的信息到money组件
        return "0";
      default:
        return "0";
    }
  }
};

export { computerNumber };
