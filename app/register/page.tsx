"use client";

import RegisterForm from "./registerForm";
import { useState } from "react";

export default function Register() {
  const [info, setInfo] = useState({ email: "", password: "", confirmPassword: "" });
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    }); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, email, confirmPassword } = info;
    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      return;
    }
    if (!email || !password || !confirmPassword) {
      setErrMsg("All fields are required");
      return;
    }
    console.log(info);
  };
  return (
      <RegisterForm
        info={info}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
  );
}