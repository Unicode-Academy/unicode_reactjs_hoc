import { withColor } from "../utils/withColor";
type Props = {
  title: string;
  color?: string;
};
function Title({ title }: Props) {
  return <h1>{title}</h1>;
}

const TitleWithColor = withColor<Props>(Title);
export default TitleWithColor;
