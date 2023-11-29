"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";
import { getMap, setMap } from "@/actions/db/mapdb";
export default function Auth() {
  const { uuid } = useContext(AuthContext);
  const router = useRouter();
  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/");
  };

  return (
    <div>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
