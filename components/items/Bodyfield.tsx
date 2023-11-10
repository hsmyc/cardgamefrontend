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
const baseStyle =
  "flex justify-center items-center border-2 border-black flex-col p-4";
export default Bodyfield;
