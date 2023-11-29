import { MapProps, TileProps } from "@/global";

export function generateMap(props: MapProps): TileProps[][] {
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
    const mapRow: TileProps[] = [];
    for (let col = 0; col < sizeS; col++) {
      const randomAssetIndex = Math.floor(Math.random() * assets.length);
      const hasItem = Math.random() < 0.25;
      const itemType = itemtypes[Math.floor(Math.random() * itemtypes.length)];
      mapRow.push({
        asset: assets[randomAssetIndex],
        item: hasItem,
        itemtype: itemType,
      });
    }
    map.push(mapRow);
  }

  return map;
}
