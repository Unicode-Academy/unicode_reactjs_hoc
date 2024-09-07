import React, { useEffect } from "react";

export const withLogger = <T,>(WrapComponent: React.ElementType) => {
  const WithLogger = (props: T) => {
    useEffect(() => {
      console.log(
        `Component ${
          (WrapComponent as React.ComponentType).displayName ||
          (WrapComponent as React.ComponentType).name
        } mounted`
      );
      return () => {
        console.log(
          `Component ${
            (WrapComponent as React.ComponentType).displayName ||
            (WrapComponent as React.ComponentType).name
          } unmounted`
        );
      };
    }, []);
    useEffect(() => {
      console.log(
        `Component ${
          (WrapComponent as React.ComponentType).displayName ||
          (WrapComponent as React.ComponentType).name
        } updated: `,
        props
      );
    });
    return <WrapComponent {...props} />;
  };

  return WithLogger;
};
