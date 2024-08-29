import { Input } from "@/components";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterFormProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onChange"
> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: RegisterFormData;
};

export default function RegistrationForm({
  className,
  onChange,
  value,
  ...props
}: RegisterFormProps) {
  return (
    <form
      className={classNames("flex flex-col gap-3", className)}
      {...props}
    >
      <Input
        type="email"
        onChange={onChange}
        value={value.email}
        name="email"
        placeholder="Email address"
      />

      <Input
        type="text"
        onChange={onChange}
        value={value.password}
        name="password"
        min={8}
        placeholder="password"
      />
      <Input
        type="text"
        onChange={onChange}
        value={value.confirmPassword}
        name="confirmPassword"
        placeholder="Repeat password"
      />
    </form>
  );
}
