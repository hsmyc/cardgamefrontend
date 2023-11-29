import { TileAsset, TileItemType } from "@/global";
import { generateMap } from "../utils/mapgenerator";
import Tile from "./Tile";
import { mapSizePicker } from "../helpers/MapSizePicker";
import { useEffect, useState } from "react";
import { getMap } from "@/actions/db/mapdb";

type MatchmapProps = {
  size: "small" | "medium" | "large";
};
type Map = {
  assets: TileAsset;
  item?: boolean;
  itemType: TileItemType;
}[][];

function Matchmap({ size }: MatchmapProps) {
  const [map, setMap] = useState<Map | unknown>([]);

  const mapHandler = async () => {
    const map = await getMap("first");
    setMap(map);
  };

  const mapStyle = mapSizePicker(size);

  return <div className={mapStyle}></div>;
}

export default Matchmap;
