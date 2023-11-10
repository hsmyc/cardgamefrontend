import { useState } from "react";
import StyledButton from "../styled/StyledButton";
import StyledForm from "../styled/StyledForm";
import StyledText from "../styled/StyledText";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { login } from "@/api/auth";
import Email from "@/public/email.svg";
import Password from "@/public/password.svg";
function Login() {
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
  );
}
const formFieldStyles = "flex flex-col gap-4";

export default Login;
