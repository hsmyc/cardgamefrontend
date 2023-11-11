import Legsfield from "./Legsfield";

function Lowerbody() {
  return (
    <div className={baseStyle}>
      <div className={legsStyle}>
        <Legsfield />
      </div>
    </div>
  );
}
const baseStyle = "grid grid-cols-5 gap-2";
const legsStyle = "col-start-3 col-end-4 row-start-1 row-end-6";
export default Lowerbody;
