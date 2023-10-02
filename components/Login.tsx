import StyledButton from "@/components/styled/StyledButton";
import StyledForm from "@/components/styled/StyledForm";
import Email from "@/public/email.svg";
import Loginimage from "@/public/loginimage.png";
import Password from "@/public/password.svg";
import Image from "next/image";
import StyledText from "./styled/StyledText";
export default function Login() {
  return (
    <div className={loginStyles}>
      <div className={formStyles}>
        <div>
          <StyledText type="title">Welcome</StyledText>
          <StyledText type="paragraph">We are glad to see you</StyledText>
        </div>
        <div className={formFieldStyles}>
          <StyledForm type="normal" placeholder="Email" icon={Email} />
          <StyledForm type="normal" placeholder="Password" icon={Password} />
          <StyledButton type="contained">
            <StyledText type="button">Next</StyledText>
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
