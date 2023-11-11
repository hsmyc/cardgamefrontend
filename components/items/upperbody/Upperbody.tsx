import Amuletfield from "./Amulet";
import Helmetfield from "./Helmet";
function Upperbody() {
  return (
    <div className={baseStyle}>
      <div className={helmetStyle}>
        <Helmetfield />
      </div>
      <div className={amuletStyle}>
        <Amuletfield />
      </div>
    </div>
  );
}
const baseStyle = "grid grid-cols-5 gap-2";
const helmetStyle = "col-start-3 col-end-4 row-start-1 row-end-6";
const amuletStyle = "col-start-4 col-end-5 row-start-4 row-end-6";
export default Upperbody;
