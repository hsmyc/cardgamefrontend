"use client";
import StyledButton from "@/components/styled/StyledButton";
import StyledForm from "@/components/styled/StyledForm";
import Email from "@/public/email.svg";
import Loginimage from "@/public/loginimage.png";
import Password from "@/public/password.svg";
import Image from "next/image";
import StyledText from "./styled/StyledText";
import { useState } from "react";
import { login, auth } from "@/api/auth";
import { getCookie } from "cookies-next";
const cookie = getCookie("token");
console.log("cka", cookie, typeof cookie);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    login(email, password);
  };
  const authHandler = () => {
    auth(cookie as string);
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
          <StyledButton type="outlined" onClick={authHandler}>
            <StyledText type="button">Auth</StyledText>
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
