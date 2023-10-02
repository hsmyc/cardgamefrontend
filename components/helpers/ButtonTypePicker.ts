export const ButtonTypePicker = (type: TButton) => {
  switch (type) {
    case "outlined":
      return "bg-transparent border-2 border-secondary text-primary";
    case "contained":
      return "bg-primary text-secondary hover:text-primary hover:bg-secondary";
    case "text":
      return "bg-transparent text-primary";
    default:
      throw Error("Button type not found");
  }
};
