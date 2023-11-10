import { TItemColor, TItemSize } from "@/global";

export const ItemSizePicker = (type: TItemSize) => {
  const sizeMapping = {
    stash: { outerWidth: "w-24 h-24", innerWidth: "w-20 h-20" },
    small: { outerWidth: "w-16 h-16", innerWidth: "w-12 h-12" },
    medium: { outerWidth: "w-24 h-32", innerWidth: "w-20 h-28" },
    large: { outerWidth: "w-24 h-40", innerWidth: "w-20 h-36" },
  };

  if (type in sizeMapping) {
    return sizeMapping[type];
  } else {
    throw Error("Item type not found");
  }
};

export const ItemColorPicker = (type: TItemColor) => {
  const colorMapping = {
    common: { outerBg: "bg-gray-400", innerBg: "bg-gray-700" },
    uncommon: { outerBg: "bg-green-400", innerBg: "bg-green-700" },
    rare: { outerBg: "bg-blue-400", innerBg: "bg-blue-700" },
    epic: { outerBg: "bg-purple-400", innerBg: "bg-purple-700" },
    legendary: { outerBg: "bg-orange-400", innerBg: "bg-orange-700" },
  };

  if (type in colorMapping) {
    return colorMapping[type];
  } else {
    throw Error("Item type not found");
  }
};
