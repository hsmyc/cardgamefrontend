"use client";
import Login from "@/components/Login";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Home() {
  const token = getCookie("token");
  const router = useRouter();
  console.log("t", token);
  if (token !== undefined) {
    router.push("/auth");
  }
  return (
    <main className="min-h-screen">
      <Login />
    </main>
  );
}
