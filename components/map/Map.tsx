import { TileAsset, TileItemType } from "@/global";
import { generateMap } from "../utils/mapgenerator";

import Tile from "./Tile";
import { mapSizePicker } from "../helpers/MapSizePicker";
import { useEffect, useState } from "react";

type MatchmapProps = {
  size: "small" | "medium" | "large";
};
type Map = {
  assets: TileAsset;
  item?: boolean;
  itemType: TileItemType;
}[][];

function Matchmap({ size }: MatchmapProps) {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    setMap(
      generateMap({
        size: size,
        assets: ["green", "water", "earth"],
        itemtypes: ["stone", "wood", "trap"],
      })
    );
  }, [size]);

  const mapStyle = mapSizePicker(size);

  return (
    <div className={mapStyle}>
      {map &&
        map.map((row, rowIndex) =>
          row.map((tile, tileIndex) => (
            <Tile
              key={`${rowIndex}-${tileIndex}`}
              asset={tile.assets as TileAsset}
              item={tile.item}
              itemtype={tile.itemType}
            />
          ))
        )}
    </div>
  );
}

export default Matchmap;
