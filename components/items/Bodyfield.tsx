import Lowerbody from "./lowerbody/Lowerbody";
import Midbody from "./midbody/Midbody";
import Upperbody from "./upperbody/Upperbody";
function Bodyfield() {
  return (
    <div className={baseStyle}>
      <Upperbody />
      <Midbody />
      <Lowerbody />
    </div>
  );
}
const baseStyle = "flex flex-col gap-2";
export default Bodyfield;
