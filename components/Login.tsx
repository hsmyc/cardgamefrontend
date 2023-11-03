"use client";
import StyledButton from "@/components/styled/StyledButton";
import StyledForm from "@/components/styled/StyledForm";
import Email from "@/public/email.svg";
import Loginimage from "@/public/loginimage.png";
import Password from "@/public/password.svg";
import Image from "next/image";
import StyledText from "./styled/StyledText";
import { useContext, useDebugValue, useEffect, useState } from "react";
import { login } from "@/api/auth";
import { setCookie } from "cookies-next";

import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = async () => {
    const token = await login(email, password);
    if (token === undefined) {
      return;
    }
    setCookie("token", token);
    router.push("/auth");
  };

  return (
    <div className={loginStyles}>
      <div className={formStyles}>
        <div>
          <StyledText type="title">Welcome</StyledText>
          <StyledText type="paragraph">We are glad to see you</StyledText>
        </div>
        <div className={formFieldStyles}>
          <StyledForm
            type="normal"
            placeholder="Email"
            icon={Email}
            onChange={handleEmailChange}
          />
          <StyledForm
            type="normal"
            placeholder="Password"
            icon={Password}
            onChange={handlePasswordChange}
          />
          <StyledButton type="contained" onClick={loginHandler}>
            <StyledText type="button">Login</StyledText>
          </StyledButton>
        </div>
      </div>
      <div>
        <Image src={Loginimage} alt="loginimage" />
      </div>
    </div>
  );
}

const loginStyles = "flex  items-center rounded-md p-8 gap-8";

const formStyles =
  "flex flex-col items-center justify-center  gap-8  basis-1/2";

const formFieldStyles = "flex flex-col gap-4";
