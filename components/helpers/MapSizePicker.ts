import { MapSize } from "@/global";

export const mapSizePicker = (size: MapSize) => {
  switch (size) {
    case "small":
      return `grid grid-cols-4 grid-rows-4 w-[256px] h-[256px]]`;
    case "medium":
      return `grid grid-cols-8 grid-rows-8 w-[512px] h-[512px]`;
    case "large":
      return `grid grid-cols-16 grid-rows-16 w-[1024px] h-[1024px]`;
    default:
      return `grid grid-cols-4 grid-rows-4 w-[256px] h-[256px]]`;
  }
};
