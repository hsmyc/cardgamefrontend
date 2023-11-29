import EarthCenter from "@/public/assets/map/earthCenter.png";
import WaterCenter from "@/public/assets/map/waterCenter.png";
import GreenCenter from "@/public/assets/map/greenCenter.png";
import TileStone from "@/public/assets/map/tilestone.png";
import TileWood from "@/public/assets/map/tilewood.png";
import TileTrap from "@/public/assets/map/tiletrap.png";
import { TileProps } from "@/global";
import Image from "next/image";

function Tile({ asset, item, itemtype }: TileProps) {
  return (
    <div className={baseStyle}>
      {asset === "earth" ? (
        <Image
          src={EarthCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      ) : asset === "water" ? (
        <Image
          src={WaterCenter}
          alt="Picture of the author"
          width={64}
          height={64}
        />
      ) : asset === "green" ? (
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
      {item && (
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
const baseStyle = "m-0 p-0 border-2 relative ";
export default Tile;
