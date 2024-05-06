import Image from "next/image";
import { FormTypePicker } from "../helpers/FormTypePicker";

type formProps = {
  mode: TForm;
  placeholder: string;
  icon?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  message?: string;
};

export default function StyledForm({
  mode,
  placeholder,
  icon,
  onChange,
  onBlur,
  type,
  message,
}: formProps) {
  const formStyles = `${baseStyle} ${FormTypePicker(mode)}`;
  return (
    <div className={formStyles}>
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <input
        className="w-full h-full bg-transparent outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {mode === "error" && <p className="text-red-500 text-xs">{message}</p>}
    </div>
  );
}

const baseStyle =
  "flex w-[360px] h-[48px] rounded-md py-2 px-4 items-center bg-gray-200 gap-2";
