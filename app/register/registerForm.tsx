import { registerStyles } from "./style";
import { Heading } from "@/components";
import Button, {ButtonVariants} from "@/components/Button/Button";

interface props {
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
    <form className={registerStyles.form} onSubmit={handleSubmit}>
      <Heading className="pl-8">Sign Up</Heading>
      <div className="w-fit flex flex-col gap-10 my-auto relative mx-auto">
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
      </div>
    </form>
  );

  return <div>{form}</div>;
}