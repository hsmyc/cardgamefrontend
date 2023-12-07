import { mapSizePicker } from "../helpers/MapSizePicker";
import { useState } from "react";
import { getMap, setMap } from "@/actions/db/mapdb";
import { generateMap } from "../utils/mapgenerator";
import Tile from "../tile/Tile";

function Matchmap({ size }: MapProps) {
  const [mapS, setMapS] = useState<Tile[][] | unknown>();
  const mapHandler = async () => {
    const map = await getMap(`map-${size}`);
    if (!map) {
      const newMap = generateMap(size);
      setMap(`map-${size}`, newMap);
      setMapS(newMap);
      return;
    }
    setMapS(JSON.parse(map as string));
  };
  console.log(JSON.stringify(mapS));
  const mapStyle = mapSizePicker(size);

  return (
    <div className={mapStyle}>
      {Array.isArray(mapS) ? (
        mapS.map((row: Tile[], index: number) => (
          <div key={index}>
            {row.map((tile: Tile, index) => (
              <Tile key={index} type={tile.type} itemtype={tile.itemtype} />
            ))}
          </div>
        ))
      ) : (
        <div>
          <button onClick={mapHandler}>Start</button>
        </div>
      )}
    </div>
  );
}

export default Matchmap;
