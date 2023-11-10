import Itemfield from "../Itemfield";
import Chest from "@/public/assets/chest.png";

function Chestfield() {
  return (
    <div>
      <Itemfield type="common" placeholder={Chest} />
    </div>
  );
}

export default Chestfield;
