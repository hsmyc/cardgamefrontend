import pawn from "@/public/assets/char/pawn.png";
import Image from "next/image";
function Pawn() {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("application/reactflow", "pawn");
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div onDragStart={onDragStart}>
      <Image src={pawn} alt="pawn" width={32} height={32} />
    </div>
  );
}
export default Pawn;
