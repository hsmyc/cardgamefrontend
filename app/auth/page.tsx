"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";
import { getMap, setMap } from "@/actions/db/mapdb";
import Tile from "@/components/tile/Tile";
import Matchmap from "@/components/map/Map";
export default function Auth() {
  const { uuid } = useContext(AuthContext);
  const router = useRouter();
  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/");
  };

  return (
    <div>
      <Matchmap size="medium" />
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
