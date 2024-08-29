import { registerStyles } from "./style";
import { Heading } from "@/components";
import Button, { ButtonVariants } from "@/components/Button/Button";
import Text from "@/components/Text";
import Link from "next/link";

export interface props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: { email: string; password: string; rePassword: string };
}

export default function RegisterForm({
  handleChange,
  handleSubmit,
  info,
}: props) {
  const form = (
    <div role="presentation" className={`${registerStyles.wrapper}`}>
      <form onSubmit={handleSubmit} className={registerStyles.form}>
      <Heading className="mb-4">Sign Up</Heading>
        <input
          type="text"
          onChange={handleChange}
          value={info.email}
          name="email"
          placeholder="Email address"
          className={registerStyles.input}
        />

        <input
          type="text"
          onChange={handleChange}
          value={info.password}
          name="password"
          className={`${registerStyles.input}`}
          placeholder="password"
        />

        <input
          type="text"
          onChange={handleChange}
          value={info.rePassword}
          name="rePassword"
          placeholder="Repeat password"
          className={registerStyles.input}
        />
        <Button variant={ButtonVariants.Primary}>Create an account</Button>
        <Text className="text-center flex gap-2 justify-center">
          <span>Already have an account?</span>{" "}
          <Link href="/login">Login</Link>
        </Text>
      </form>
    </div>
  );

  return <div>{form}</div>;
}