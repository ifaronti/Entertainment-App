"use client";

import { useState } from "react";
import LoginForm, { LoginFormValue } from "./LoginForm";
import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <LoginForm
        onChange={({ email, password }: LoginFormValue) => {
          setEmail(email);
          setPassword(password);
        }}
        value={{
          email,
          password,
        }}
      />
      <Button
        onClick={() => {
          console.log({
            email,
            password,
          });
        }}
        variant={ButtonVariants.Primary}
        className="text-center w-full"
      >
        Login to your account
      </Button>
    </div>
  );
};

export default Page;
