import Bodyfield from "./Bodyfield";
import Weaponsfield from "./Weaponsfield";

function Itemsfield() {
  return (
    <div className={baseStyle}>
      <Bodyfield />
      <Weaponsfield />
    </div>
  );
}
const baseStyle = "flex gap-2";
export default Itemsfield;
