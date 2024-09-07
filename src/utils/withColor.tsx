import React from "react";

export const withColor = <T,>(WrapComponent: React.ElementType) => {
  const getColor = () => {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  };

  return (props: T) => {
    //Hook
    return (
      <div style={{ background: getColor() }}>
        <WrapComponent {...props} color={getColor()} />
      </div>
    );
  };
};
