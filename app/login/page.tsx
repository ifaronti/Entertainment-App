"use client";

import { useState } from "react";
import LoginForm, { LoginFormValue } from "./LoginForm";
import { Button } from "@/components";
import { ButtonVariants } from "@/components/Button";
import { loginUser } from "@/components/API-calls/login";
import { useRouter } from "next/navigation";
import { paramsType } from "@/components/API-calls/login";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('')
  const goTo = useRouter()

  function redirect(data:paramsType) {
    if (!data.authorization) {
      return setErr(data)
    }
    localStorage.setItem('token', data.authorization)
    goTo.push('/dashboard')
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (!email || !password) {
      setErr('all fields are required for authentication')
      return
    }
    await loginUser({email, password}, redirect)
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
      {err && <p className="text-red-600 capitalize mx-auto">{ err}</p>}
    </div>
  );
};

export default Page;