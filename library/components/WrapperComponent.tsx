import React from "react";

const WrapperComponent: React.FC = ({ children }) => {
  return <div style={{ padding: 32 }}>{children}</div>;
};

export default WrapperComponent;
