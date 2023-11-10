"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";
import Itemsfield from "@/components/items/Itemsfield";
export default function Auth() {
  const { uuid } = useContext(AuthContext);
  const router = useRouter();
  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/");
  };

  return (
    <div>
      Logged In, this is page!
      <Itemsfield />
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
