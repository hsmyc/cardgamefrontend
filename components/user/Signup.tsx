"use client";
import StyledButton from "@/components/styled/StyledButton";
import StyledForm from "@/components/styled/StyledForm";
import StyledText from "@/components/styled/StyledText";
import { useState } from "react";
import { signup } from "@/api/auth";
import { validatePassword } from "../helpers/FormValidation";
function Signup() {
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState<PasswordValidation>({
    status: true,
    message: "",
  });

  const handlePasswordValidation = (password: string) => {
    const result = validatePassword(password);
    setIsPasswordValid(result);
    console.log(result);
  };

  const handleSignup = async () => {
    if (password !== passwordConfirm) {
      setIsPasswordMatch(false);
      return;
    }
    if (email === "") {
      setIsEmailError(true);
      return;
    }
    if (password === "") {
      setIsPasswordError(true);
      return;
    }

    const body = {
      name,
      email,
      password,
    };
    const res = await signup(body);
  };

  return (
    <div className={baseStyle}>
      <StyledForm
        mode="normal"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <StyledForm
        mode={isEmailError ? "error" : "normal"}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledForm
        mode={isPasswordError || !isPasswordValid.status ? "error" : "normal"}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => handlePasswordValidation(password)}
        message={isPasswordValid.message}
      />
      <StyledForm
        mode={isPasswordMatch ? "normal" : "error"}
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setpasswordConfirm(e.target.value)}
        onBlur={() => {
          if (password !== passwordConfirm) {
            setIsPasswordMatch(false);
          } else {
            setIsPasswordMatch(true);
          }
        }}
      />
      <StyledButton onClick={handleSignup} type="contained">
        <StyledText type="button">Signup</StyledText>
      </StyledButton>
    </div>
  );
}

const baseStyle = "flex flex-col gap-4";

export default Signup;
