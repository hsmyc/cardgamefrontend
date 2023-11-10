import Image from "next/image";
import { FormTypePicker } from "../helpers/FormTypePicker";
import { on } from "events";
import { TForm } from "@/global";
type formProps = {
  type: TForm;
  placeholder: string;
  icon?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function StyledForm({
  type,
  placeholder,
  icon,
  onChange,
  onBlur,
}: formProps) {
  const formStyles = `${baseStyle} ${FormTypePicker(type)}`;
  return (
    <div className={formStyles}>
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <input
        className="w-full h-full bg-transparent outline-none"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

const baseStyle =
  "flex w-[360px] h-[48px] rounded-md py-2 px-4 items-center bg-gray-200 gap-2";
