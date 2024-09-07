import { Component } from "react";
import { withColor } from "../utils/withColor";
import Text from "./Text";
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
    this.number = 0;
  }
  handleIncrement = () => {
    this.setState((prevState: State) => ({ count: prevState.count + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState: State) => ({ count: prevState.count - 1 }));
  };
  render() {
    console.log(`1. Counter Render`);
    if (this.state.count < 5) {
      this.number++;
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        <p>Color: {this.props.color}</p>
        <Text count={this.number} />
      </div>
    );
  }
}

const CounterWithColor = withColor(Counter);
export default CounterWithColor;

//React.memo
