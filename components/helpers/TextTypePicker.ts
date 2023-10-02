export const TextTypePicker = (type: TText) => {
  switch (type) {
    case "paragraph":
      return "text-base";
    case "title":
      return "text-[4rem] font-semibold";
    case "subtitle":
      return "text-[2.5rem]";
    case "button":
      return "text-xl";
    default:
      throw Error("Text type not found");
  }
};
