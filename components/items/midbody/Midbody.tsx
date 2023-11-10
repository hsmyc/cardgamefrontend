import Chestfield from "./Chestfield";
import Handfield from "./Handfield";
import Ringfield from "./Ringfield";
function Midbody() {
  return (
    <div className={baseStyle}>
      <div className={ringStyle}>
        <Ringfield />
      </div>
      <div className={handStyle}>
        <Handfield />
      </div>
      <div className={chestStyle}>
        <Chestfield />
      </div>
    </div>
  );
}
const baseStyle = "grid grid-cols-3 gap-2";
const ringStyle = "col-start-1 col-end-2 row-start-4 row-end-6";
const handStyle = "col-start-3 col-end-3 row-start-3 row-end-6";
const chestStyle = "col-start-2 col-end-4 row-start-1 row-end-6";

export default Midbody;
