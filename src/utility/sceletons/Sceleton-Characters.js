import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={220}
    height={300}
    viewBox="0 0 220 300"
    backgroundColor="#707070"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="1" y="-1" rx="0" ry="0" width="249" height="321" />
  </ContentLoader>
);

export const Sceleton = () => {
  return [...new Array(10)].map((n, index) => <MyLoader key={index} />);
};
