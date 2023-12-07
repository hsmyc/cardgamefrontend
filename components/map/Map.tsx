import { mapSizePicker } from "../helpers/MapSizePicker";
import { useContext, useState } from "react";
import { getMap, setMap } from "@/actions/db/mapdb";
import { generateMap } from "../utils/mapgenerator";
import Tile from "../tile/Tile";
import { GameContext } from "@/context/gamecontext";

function Matchmap({ size }: MapProps) {
  const { pawnPosition } = useContext(GameContext);
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
  const mapStyle = mapSizePicker(size);

  return (
    <div className={mapStyle}>
      {Array.isArray(mapS) ? (
        mapS.map((row: Tile[], y: number) => (
          <div key={y}>
            {row.map((tile: Tile, x: number) => (
              <Tile
                key={x}
                type={tile.type}
                itemtype={tile.itemtype}
                x={x}
                y={y}
                hasPawn={
                  pawnPosition && pawnPosition[0] === x && pawnPosition[1] === y
                    ? true
                    : false
                }
              />
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
