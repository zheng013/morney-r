import React from "react";
require("icons/money.svg");

// let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
//   requireContext.keys().forEach(requireContext);
// try {
//   importAll(require.context("../assets/icons", true, /\.svg$/));
// } catch (error) {
//   console.log(error);
// }
type Href = {
  name: string;
};
const Icon = (props: Href) => {
  return (
    <svg fill="red" className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export default Icon;
