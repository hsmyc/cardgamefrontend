import Itemfield from "../Itemfield";
import Amulet from "@/public/assets/amulet.png";
function Amuletfield() {
  return (
    <div>
      <Itemfield type="common" placeholder={Amulet} />
    </div>
  );
}

export default Amuletfield;
