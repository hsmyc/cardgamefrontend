import { ButtonTypePicker } from "../helpers/ButtonTypePicker";

type buttonProps = {
  type: TButton;
  children?: React.ReactNode;
  onClick: () => void;
};
export default function StyledButton({ type, children, onClick }: buttonProps) {
  const buttonStyles = `${baseStyle} ${ButtonTypePicker(type)}`;
  return (
    <div className={buttonStyles} onClick={onClick}>
      {children}
    </div>
  );
}

const baseStyle =
  "flex w-[360px] h-[48px] rounded-md py-2 px-4 justify-center items-center hover:cursor-pointer";
