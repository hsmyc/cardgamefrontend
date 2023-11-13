import { MapSize, TileAsset, TileItemType } from "@/global";

interface MapProps {
  size: MapSize;
  assets: TileAsset[];
  itemtypes: TileItemType[];
}

export function generateMap(props: MapProps): any[][] {
  const { size, assets, itemtypes } = props;
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
    const mapRow: any[] = [];
    for (let col = 0; col < sizeS; col++) {
      const randomAssetIndex = Math.floor(Math.random() * assets.length);

      const hasItem = Math.random() < 0.25;
      const itemType = itemtypes[Math.floor(Math.random() * itemtypes.length)];
      mapRow.push({
        assets: assets[randomAssetIndex],
        item: hasItem,
        itemType: itemType,
      });
    }
    map.push(mapRow);
  }

  return map;
}
