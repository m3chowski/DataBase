import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1350}
    height={120}
    viewBox="0 0 1350 120"
    backgroundColor="#707070"
    foregroundColor="#5e5e5e"
    {...props}
  >
    <rect x="1" y="0" rx="5" ry="5" width="1350" height="120" />
  </ContentLoader>
);

export const SceletonEpisode = () => {
  return [...new Array(10)].map((n, index) => <MyLoader key={index} />);
};
