"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect, useContext, useState } from "react";
import { deleteCookie } from "cookies-next";
import Itemfield from "@/components/character/Itemfield";
import Sword from "@/public/assets/sword.png";
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
      <Itemfield type="uncommon" size="small" placeholder={Sword} />
      <Itemfield type="legendary" size="small" placeholder={Sword} />
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
