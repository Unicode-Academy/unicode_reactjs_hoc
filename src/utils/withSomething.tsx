import React from "react";

export const withSomething = <T,>(WrappedComponent: React.ElementType) => {
  return (props: T) => {
    const somethingValue = "something";
    return <WrappedComponent {...props} somethingValue={somethingValue} />;
  };
};
