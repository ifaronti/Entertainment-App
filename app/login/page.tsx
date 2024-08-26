"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <LoginForm
        onChange={(e) => {
          console.log(e);
        }}
      />
      <Button variant={ButtonVariants.Primary} className="text-center w-full">Login to your account</Button>
    </div>
  );
};

export default Page;
