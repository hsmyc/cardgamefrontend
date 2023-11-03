"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect, useContext, useState } from "react";
import { deleteCookie } from "cookies-next";

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
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
