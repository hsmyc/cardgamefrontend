"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import Matchmap from "@/components/map/Map";
export default function Auth() {
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
