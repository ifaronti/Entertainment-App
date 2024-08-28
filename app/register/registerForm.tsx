"use client";

import { useState } from "react";
import { registerStyles } from './style'
import { FC } from "react";

export default function RegisterForm({ children }: { children: React.ReactNode }) {
  const [info, setInfo] = useState({ email: "", password: "", rePassword: "" });
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

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { password, email, rePassword } = info;
    e.preventDefault();
    if (password !== rePassword) {
      setErrMsg("Passwords do not match");
      return;
    }
    if (!email || !password || !rePassword) {
      setErrMsg("All fields are required");
      return;
    }
    console.log(info);
  };

  const form = (
    <form className={registerStyles.form}>
      <input
        type="text"
        onChange={handleChange}
        value={info.email}
        name="email"
      />

      <input
        type="text"
        onChange={handleChange}
        value={info.email}
        name="password"
      />

      <input
        type="text"
        onChange={handleChange}
        value={info.email}
        name="rePassword"
      />
    </form>
  );

  return form
}
