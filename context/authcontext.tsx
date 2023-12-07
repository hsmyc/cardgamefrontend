"use client";
import { createContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { auth } from "@/api/auth";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<{
  uuid: string | undefined;
}>({ uuid: undefined });
export const AuthProvider = ({ children }: any) => {
  const token = getCookie("token");
  const [uuid, setUuid] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const authuser = async () => {
      const uuid = await auth(token as string);
      setUuid(uuid);
    };
    if (token === undefined) {
      router.push("/");
    } else {
      authuser();
    }
  }, [token, router]);

  return (
    <AuthContext.Provider value={{ uuid }}>{children}</AuthContext.Provider>
  );
};
