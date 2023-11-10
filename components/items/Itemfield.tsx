import { TItemColor } from "@/global";
import { ItemColorPicker } from "../helpers/ItemPicker";
import Image, { StaticImageData } from "next/image";
type ItemfieldProps = {
  type: TItemColor;
  placeholder: StaticImageData;
};

function Itemfield(props: ItemfieldProps) {
  const { type, placeholder } = props;

  const ItemFieldStyles_Out = `${baseStyleOuter}  ${
    ItemColorPicker(type).outerBg
  }`;
  const ItemFieldStyles_In = `${baseStyleInner} ${
    ItemColorPicker(type).innerBg
  }`;
  console.log(ItemFieldStyles_Out);
  return (
    <div className={ItemFieldStyles_Out}>
      <div className={ItemFieldStyles_In}>
        <Image src={placeholder} alt="item" width={50} height={50} />
      </div>
    </div>
  );
}
const baseStyleOuter = `flex justify-center items-center border-2 rounded-sm  border-slate-400 w-24 h-24 shadow-md hover:shadow-xl hover:border-indigo-700 `;
const baseStyleInner = `flex justify-center items-center border-2 border-slate-700 rounded-bl-xl rounded-tr-xl w-20 h-20`;
export default Itemfield;
