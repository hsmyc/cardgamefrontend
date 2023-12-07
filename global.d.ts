type TButton = "outlined" | "contained" | "text";
type TForm = "error" | "success" | "normal";
type TText = "paragraph" | "title" | "subtitle" | "button";
type TItemColor = "common" | "uncommon" | "rare" | "epic" | "legendary";
type MapSize = "small" | "medium" | "large";
type TileAsset = "water" | "earth" | "green";
type TileItemType = "wood" | "stone" | "trap";
type pawnPosition = number[] | undefined;
type setPawnPosition = React.Dispatch<
  React.SetStateAction<number[] | undefined>
>;
type MapProps = {
  size: MapSize;
};

interface SignupBody {
  email: string;
  password: string;
  name: string;
}
interface Tile {
  type: TileAsset;
  itemtype?: TileItemType;
  hasPawn: boolean;
  x: number;
  y: number;
}
