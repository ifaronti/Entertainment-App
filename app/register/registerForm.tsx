import { registerStyles } from "./style";
import { Heading } from "@/components";
import Button, { ButtonVariants } from "@/components/Button/Button";
import Text from "@/components/Text";
import Link from "next/link";

export type props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: { email: string; password: string; confirmPassword: string };
};

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
          type="email"
          onChange={handleChange}
          value={info.email}
          name="email"
          placeholder="Email address"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          className={registerStyles.input}
        />

        <input
          type="password"
          onChange={handleChange}
          value={info.password}
          name="password"
          min={8}
          className={`${registerStyles.input}`}
          placeholder="Password"
        />

        <input
          type="password"
          onChange={handleChange}
          value={info.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm password"
          className={registerStyles.input}
        />
        <Button aria-label="Form submit" variant={ButtonVariants.Primary}>
          Create an account
        </Button>
        <Text className={registerStyles.text}>
          <span>Already have an account?</span> <Link href="/login">Login</Link>
        </Text>
      </form>
    </div>
  );

  return form;
}
