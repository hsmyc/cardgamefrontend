"use client";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import LoginHeroes from "@/public/assets/heroes-login.png";
import Image from "next/image";
import StyledText from "@/components/styled/StyledText";
import { useState } from "react";
import Login from "@/components/user/Login";
import Signup from "@/components/user/Signup";
import StyledButton from "@/components/styled/StyledButton";
export default function Home() {
  const token = getCookie("token");
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  if (token !== undefined) {
    router.push("/auth");
  }
  return (
    <main className="min-h-screen">
      <div className={loginStyles}>
        <div className={formStyles}>
          <div>
            <StyledText type="title">Welcome</StyledText>
            <StyledText type="paragraph">We are glad to see you</StyledText>
          </div>
          {isLogin ? <Login /> : <Signup />}
          <StyledButton onClick={() => setIsLogin(!isLogin)} type="text">
            <StyledText type="button">
              {isLogin ? "Create an account" : "Login"}
            </StyledText>
          </StyledButton>
        </div>
        <div className={imageStyles}>
          <Image src={LoginHeroes} alt="loginheroes" />
        </div>
      </div>
    </main>
  );
}

const imageStyles = "flex basis-1/2 rounded-xl overflow-hidden";
const loginStyles = "flex  items-center rounded-md p-8 gap-8";

const formStyles =
  "flex flex-col items-center justify-center  gap-8  basis-1/2";
