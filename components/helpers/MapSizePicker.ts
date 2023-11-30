export const mapSizePicker = (size: MapSize) => {
  switch (size) {
    case "small":
      return `grid grid-cols-4  w-fit h-fit border-2 border-black`;
    case "medium":
      return `grid grid-cols-8  w-fit h-fit  border-2 border-black`;
    case "large":
      return `grid grid-cols-16  w-fit h-fit border-2 border-black`;
    default:
      return `grid grid-cols-4  w-fit h-fit border-2 border-black `;
  }
};
