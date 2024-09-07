'use client'

import { useState } from "react"
import RegistrationForm from "./registration"
import { RegisterCall } from "@/components/API-calls/register"
import { useRouter } from "next/navigation"
import { paramsType } from "@/components/API-calls/login"

export default function Register() {
  const [info, setInfo] = useState({ email: '', password: '', confirmPassword: '' })
  const [errMsg, setErrMsg] = useState<string>("");
  const goTo = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setErrMsg('')
  };

  const redirect = (data:paramsType) => {
    if (!data.success) {
      return setErrMsg(data)
    }
    goTo.push('/login')
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { password, email, confirmPassword } = info;

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match");
      return;
    }
    if (!email || !password || !confirmPassword) {
      setErrMsg("All fields are required");
      return;
    }
    await RegisterCall(info, redirect)
  };

  return (
    <RegistrationForm
      info={info}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      err={errMsg}
    />
  )
}