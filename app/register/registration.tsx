import { registerStyles } from './style';
import { Heading } from "@/components";
import Button, { ButtonVariants } from "@/components/Button/Button";
import Text from "@/components/Text";
import Link from "next/link";

export type registrationInfoProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  info: { email: string; password: string; confirmPassword: string };
  err:string
};

export default function RegistrationForm({
  handleChange,
  handleSubmit,
  info,
  err
}: registrationInfoProps) {
  const form = (
      <form onSubmit={handleSubmit} className={registerStyles.form}>
        <Heading className="mb-4">Sign Up</Heading>
          <input
            type="email"
            onChange={handleChange}
            value={info.email}
            name="email"
            placeholder="Email address"
            className={registerStyles.input}
          />

          <input
            type="password"
            onChange={handleChange}
            value={info.password}
            name="password"
            min="8"
            className={`${registerStyles.input}`}
            placeholder="Password"
          />

          <input
            type="password"
            onChange={handleChange}
            value={info.confirmPassword}
            name="confirmPassword"
            min="8"
            placeholder="Confirm password"
            className={registerStyles.input}
          />
          <Button variant={ButtonVariants.Primary}>
            Create an account
          </Button>
          {err && <p className='text-red-600 capitalize mx-auto'>{ err}</p>}
          <Text className={registerStyles.text}>
            <span>Already have an account?</span> <Link href="/login">Login</Link>
          </Text>
      </form>
  );

  return form;
}