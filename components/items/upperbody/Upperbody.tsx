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
const baseStyle = "grid grid-cols-2 gap-2 p-4 ";
const helmetStyle = "col-start-1 col-end-2 row-start-1 row-end-6";
const amuletStyle = "col-start-2 col-end-3 row-start-4 row-end-6";
export default Upperbody;
