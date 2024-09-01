"use client";

import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";
import RegistrationForm from "./RegistrationForm";
import { useState } from "react";

export default function Register() {
<<<<<<< HEAD
  const [info, setInfo] = useState({ email: "", password: "", confirmPassword: "" });
=======
  const [value, setValue] = useState({
    confirmPassword: "",
    email: "",
    password: "",
  });
>>>>>>> f3b8d48c6327fd588c240f4e8792cacfe2f8b16f
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

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, email, confirmPassword } = info;
=======
  const handleSubmit = () => {
    const { password, email, confirmPassword } = value;

>>>>>>> f3b8d48c6327fd588c240f4e8792cacfe2f8b16f
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
