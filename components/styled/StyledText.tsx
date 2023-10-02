import { TextTypePicker } from "../helpers/TextTypePicker";
type textProps = {
  type: TText;
  children?: React.ReactNode;
};

export default function StyledText({ type, children }: textProps) {
  const textStyles = `${baseStyle} ${TextTypePicker(type)}`;
  return <div className={textStyles}>{children}</div>;
}

const baseStyle = "flex m-0 p-0 justify-center items-center";
