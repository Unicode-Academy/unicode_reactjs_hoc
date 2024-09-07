import { Component } from "react";
import { withColor } from "../utils/withColor";
interface Props {
  color: string;
}
interface State {
  count: number;
}
class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState((prevState: State) => ({ count: prevState.count + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState: State) => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        <p>Color: {this.props.color}</p>
      </div>
    );
  }
}

const CounterWithColor = withColor(Counter);
export default CounterWithColor;
