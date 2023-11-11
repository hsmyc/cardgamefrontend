import Itemfield from "../Itemfield";
import Weapon from "@/public/assets/weapon.png";
function Weaponfield() {
  return (
    <div>
      <Itemfield type="legendary" placeholder={Weapon} />
    </div>
  );
}

export default Weaponfield;
