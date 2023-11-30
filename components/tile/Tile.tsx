import EarthCenter from "@/public/assets/map/earthCenter.png";
import WaterCenter from "@/public/assets/map/waterCenter.png";
import GreenCenter from "@/public/assets/map/greenCenter.png";
import TileStone from "@/public/assets/map/tilestone.png";
import TileWood from "@/public/assets/map/tilewood.png";
import TileTrap from "@/public/assets/map/tiletrap.png";
import Image from "next/image";

function Tile({ type, itemtype }: Tile) {
  return (
    <div className={baseStyle}>
      {type === "earth" ? (
        <Image
          src={EarthCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      ) : type === "water" ? (
        <Image
          src={WaterCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      ) : type === "green" ? (
        <Image
          src={GreenCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      ) : (
        <Image
          src={EarthCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      )}
      {itemtype && (
        <div className="absolute top-4 left-4 ">
          <Image
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
    </div>
  );
}
const baseStyle = "m-[1px] p-0 relative w-fit border-2 border-black";
export default Tile;
