import EarthCenter from "@/public/assets/map/earthCenter.png";
import WaterCenter from "@/public/assets/map/waterCenter.png";
import GreenCenter from "@/public/assets/map/greenCenter.png";
import TileStone from "@/public/assets/map/tilestone.png";
import TileWood from "@/public/assets/map/tilewood.png";
import TileTrap from "@/public/assets/map/tiletrap.png";
import Image from "next/image";
import Pawn from "../char/char";
import { useContext, useState } from "react";
import { GameContext } from "@/context/gamecontext";

function Tile({ type, itemtype, hasPawn, x, y }: Tile) {
  const { setPawnPosition } = useContext(GameContext);
  const pawnStyle = () => {
    if (itemtype) {
      return "absolute top-4 left-4 border-2 border-black";
    } else {
      return "absolute top-4 left-4";
    }
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedItem = e.dataTransfer.getData("application/reactflow");
    if (droppedItem === "pawn") {
      setPawnPosition([x, y]);
    }
  };

  return (
    <div className={baseStyle} onDragOver={onDragOver} onDrop={onDrop}>
      <div className="absolute top-0 left-0 text-xs">
        {x},{y}
      </div>
      <Image
        draggable={false}
        src={
          type === "earth"
            ? EarthCenter
            : type === "water"
            ? WaterCenter
            : GreenCenter
        }
        alt="Picture of the author"
        width={64}
        height={64}
      />

      {itemtype && (
        <div className="absolute top-4 left-4 ">
          <Image
            draggable={false}
            src={
              itemtype === "stone"
                ? TileStone
                : itemtype === "wood"
                ? TileWood
                : TileTrap
            }
            alt="Picture of the author"
            width={32}
            height={32}
          />
        </div>
      )}
      {hasPawn && (
        <div className={pawnStyle()}>
          <Pawn />
        </div>
      )}
    </div>
  );
}
const baseStyle = "m-[1px] p-0 relative w-fit border-2 border-black";

export default Tile;
