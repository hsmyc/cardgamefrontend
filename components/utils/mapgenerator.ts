import { setMap } from "@/actions/db/mapdb";
import { assets, items } from "./constants";

export function generateMap(size: MapSize): Tile[][] {
  let sizeS: number;
  switch (size) {
    case "small":
      sizeS = 4;
      break;
    case "medium":
      sizeS = 8;
      break;
    case "large":
      sizeS = 16;
      break;
    default:
      sizeS = 8;
      break;
  }

  const map: any[][] = [];

  for (let row = 0; row < sizeS; row++) {
    const mapRow: Tile[] = [];
    for (let col = 0; col < sizeS; col++) {
      const randomAssetIndex = Math.floor(Math.random() * assets.length);
      const hasItem = Math.random() < 0.2;
      if (hasItem) {
        const randomItemIndex = Math.floor(Math.random() * items.length);
        mapRow.push({
          type: assets[randomAssetIndex],
          itemtype: items[randomItemIndex],
        });
        continue;
      } else {
        mapRow.push({ type: assets[randomAssetIndex] });
      }
    }
    map.push(mapRow);
    setMap(`map-${size}`, map);
  }

  return map;
}
