type TButton = "outlined" | "contained" | "text";
type TForm = "error" | "success" | "normal";
type TText = "paragraph" | "title" | "subtitle" | "button";
type TItemColor = "common" | "uncommon" | "rare" | "epic" | "legendary";
type MapSize = "small" | "medium" | "large";
type TileAsset = "water" | "earth" | "green";
type TileItemType = "wood" | "stone" | "trap";
interface Tile {
  type: TileAsset;
  itemtype?: TileItemType;
  hasPawn?: boolean;
}
type MapProps = {
  size: MapSize;
};
interface SignupBody {
  email: string;
  password: string;
  name: string;
}
