import withMemo from "../utils/withMemo";
interface Props {
  count: number;
}
function Text({ count }: Props) {
  console.log(`2. Text Render`);

  return <div>Text: {count}</div>;
}
const TextWithMemo = withMemo<Props>(Text);
export default TextWithMemo;
