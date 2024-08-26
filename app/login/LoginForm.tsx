import { Input } from "@/components";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type LoginFormProps = DetailedHTMLProps<
  HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;
const LoginForm = ({ className, ...props }: LoginFormProps) => {
  return (
    <form className={classNames("flex flex-col gap-3", className)} {...props}>
      <Input name="email" placeholder="Email Address" value="" type="email" />
      <Input name="password" placeholder="Password" value="" type="password" />
    </form>
  );
};

export default LoginForm;
