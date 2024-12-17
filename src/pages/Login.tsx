import React from "react";
import { useState } from "react";
import Button from "./../components/common/Button";
import Input from "./../components/common/Input";
import MainLogo from "./../assets/images/mainTurtleLogo.png";
function Login() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <img src={MainLogo} alt="mainLogo" className="w-[300px] m-auto" />
      <Button
        type="button"
        color="white"
        className="mt-4"
        onClick={() => alert("test")}
      >
        회원가입
      </Button>{" "}
      <Button
        type="submit"
        color="sky"
        className="mt-4"
        onClick={() => alert("test")}
      >
        test
      </Button>{" "}
      <Button
        type="reset"
        color="kakao"
        className="mt-4"
        onClick={() => alert("test")}
      >
        카카오 로그인
      </Button>
    </div>
  );
}

export default Login;
