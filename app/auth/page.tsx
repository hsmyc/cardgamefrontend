"use client";
import { AuthContext } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";
import Map from "@/components/map/Map";
export default function Auth() {
  const { uuid } = useContext(AuthContext);
  const router = useRouter();
  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/");
  };

  return (
    <div>
      <Map size="small" />
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
