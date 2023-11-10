import { TItemColor } from "@/global";

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
