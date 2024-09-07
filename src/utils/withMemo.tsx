import React from "react";
export default function withMemo<T>(WrapComponent: React.ElementType) {
  return class extends React.Component<T> {
    constructor(props: T) {
      super(props);
    }
    shouldComponentUpdate(nextProps: T): boolean {
      const prevProps = this.props;
      if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return false;
      }
      return true;
    }
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
}
