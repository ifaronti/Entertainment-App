"use client";

import { useState } from "react";
import LoginForm, { LoginFormValue } from "./LoginForm";
import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";
import { loginUser } from "@/components/API-calls/login";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('')
  const goTo = useRouter()

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (!email || !password) {
      setErr('all fields are required for authentication')
      return
    }
    await loginUser({email, password}, goTo.push('/dashboard'))
  }

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
        onClick={handleSubmit}
        
        variant={ButtonVariants.Primary}
        className="text-center w-full"
      >
        Login to your account
      </Button>
    </div>
  );
};

export default Page;