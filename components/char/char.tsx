import pawn from "@/public/assets/char/pawn.png";
import Image from "next/image";
function Char() {
  return (
    <div>
      <Image src={pawn} alt="pawn" width={32} height={32} />
    </div>
  );
}
export default Char;
