export const FormTypePicker = (type: TForm) => {
  switch (type) {
    case "error":
      return "border-2 border-red-500";
    case "success":
      return "border-2 border-green-500";
    case "normal":
      return "border-2 text-primary";
    default:
      throw Error("Form type not found");
  }
};
