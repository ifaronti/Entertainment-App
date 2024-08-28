import { Input } from "@/components";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LoginFormValue {
  email: string;
  password: string;
};

type LoginFormProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onChange"
> & {
  onChange: (value: LoginFormValue) => void;
  value: LoginFormValue;
};


const LoginForm = ({
  className,
  value,
  onChange,
  ...props
}: LoginFormProps) => {
  return (
    <form className={classNames("flex flex-col gap-3", className)} {...props}>
      <Input
        name="email"
        placeholder="Email Address"
        onChange={(e) => {
          onChange({
            ...value,
            email: e.currentTarget.value,
          });
        }}
        type="email"
        value={value.email}
      />
      <Input
        name="password"
        placeholder="Password"
        onChange={(e) => {
          onChange({
            ...value,
            password: e.currentTarget.value,
          });
        }}
        type="password"
        value={value.password}
      />
    </form>
  );
};

export default LoginForm;