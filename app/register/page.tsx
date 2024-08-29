"use client";

import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";
import RegistrationForm from "./RegistrationForm";
import { useState } from "react";

export default function Register() {
  const [value, setValue] = useState({
    confirmPassword: "",
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const { password, email, confirmPassword } = value;

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      return;
    }
    if (!email || !password || !confirmPassword) {
      setErrMsg("All fields are required");
      return;
    }

    console.log(value);
  };

  return (
    <div className="flex flex-col gap-8">
      <RegistrationForm value={value} onChange={handleChange} />
      <Button
        onClick={() => {
          handleSubmit();
        }}
        aria-label="Form submit"
        variant={ButtonVariants.Primary}
      >
        Create an account
      </Button>
    </div>
  );
}
