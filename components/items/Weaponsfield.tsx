import Weaponfield from "./gear/Weapon";
import Shieldfield from "./gear/Shield";
import Supportfield from "./gear/Support";
import Potfield from "./gear/Pot";
function Weaponsfield() {
  return (
    <div className={baseStyle}>
      <Weaponfield />
      <Shieldfield />
      <Supportfield />
      <Potfield />
    </div>
  );
}
const baseStyle = "flex flex-col gap-2";
export default Weaponsfield;
