import { type } from "os";

type TButton = "outlined" | "contained" | "text";
type TForm = "error" | "success" | "normal";
type TText = "paragraph" | "title" | "subtitle" | "button";
type SignupBody = {
  email: string;
  password: string;
  name: string;
};

type TItemColor = "common" | "uncommon" | "rare" | "epic" | "legendary";
