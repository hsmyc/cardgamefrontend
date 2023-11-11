import Itemfield from "../Itemfield";
import Shield from "@/public/assets/shield.png";
function Shieldfield() {
  return (
    <div>
      <Itemfield type="epic" placeholder={Shield} />
    </div>
  );
}

export default Shieldfield;
