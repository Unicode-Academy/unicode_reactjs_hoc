import { withColor } from "../utils/withColor";
type Props = {
  a: number;
  color?: string;
};
function Content({ color, a }: Props) {
  console.log(a);

  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem atque
        eligendi ratione fugiat inventore quibusdam impedit, dignissimos sit
        deleniti perspiciatis, non asperiores libero dolore autem, officiis
        itaque quaerat quasi ab.
      </p>
      <p>Color: {color}</p>
    </>
  );
}

const ContentWithColor = withColor<Props>(Content);
export default ContentWithColor;
