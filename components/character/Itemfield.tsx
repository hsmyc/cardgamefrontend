import { TItemColor, TItemSize } from "@/global";
import { ItemColorPicker, ItemSizePicker } from "../helpers/ItemPicker";
import Image, { StaticImageData } from "next/image";
type ItemfieldProps = {
  type: TItemColor;
  size: TItemSize;
  placeholder: StaticImageData;
};

function Itemfield(props: ItemfieldProps) {
  const { type, size, placeholder } = props;

  const ItemFieldStyles_Out = `${baseStyleOuter} ${
    ItemSizePicker(size).outerWidth
  } ${ItemColorPicker(type).outerBg}`;
  const ItemFieldStyles_In = `${baseStyleInner} ${
    ItemSizePicker(size).innerWidth
  } ${ItemColorPicker(type).innerBg}`;
  console.log(ItemFieldStyles_Out);
  return (
    <div className={ItemFieldStyles_Out}>
      <div className={ItemFieldStyles_In}>
        <Image src={placeholder} alt="item" className="scale-150" />
      </div>
    </div>
  );
}
const baseStyleOuter = `flex justify-center items-center border-2 rounded-sm  border-slate-400`;
const baseStyleInner = `flex justify-center items-center border-2 border-slate-700 rounded-bl-xl rounded-tr-xl`;
export default Itemfield;
