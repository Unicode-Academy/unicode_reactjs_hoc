import { withSomething } from "./utils/withSomething";
type Props = {
  somethingValue: string;
};
const App = withSomething<Props>(({ somethingValue }: Props) => {
  return (
    <div>
      <h1>HOC</h1>
      <h2>{somethingValue}</h2>
    </div>
  );
});
export default App;
