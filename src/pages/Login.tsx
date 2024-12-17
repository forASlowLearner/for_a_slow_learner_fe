import React from "react";
import { useState } from "react";
import Button from "./../components/common/Button";
import Input from "./../components/common/Input";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <p>This is the login page of the application.</p>
      <Input
        type="text"
        placeholder="텍스트를 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
        className="mt-4"
      />
      <Button
        type="button"
        buttonType="multi"
        className="mt-4"
        onClick={() => alert("test")}
      >
        test
      </Button>{" "}
      <Button
        type="submit"
        buttonType="positive"
        className="mt-4"
        onClick={() => alert("test")}
      >
        test
      </Button>{" "}
      <Button
        type="reset"
        buttonType="negative"
        className="mt-4"
        onClick={() => alert("test")}
      >
        test
      </Button>
    </div>
  );
}

export default Login;
