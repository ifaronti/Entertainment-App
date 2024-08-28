import { Input } from "@/components";
import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type LoginFormValue = {
  email: string;
  password: string;
}; /* This is type declaration for the login info right */

/*Explain the omit, I get you decalred the attribute "onChange"? confusing! */
type LoginFormProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onChange"
> & {
  onChange: (value: LoginFormValue) => void;
  value: LoginFormValue;
};

/* Never used these features of react before so I need a little note 
explaining their usages in this particular context. LoginFormProps is also
typeScript right? I get that you decalred onChange as a function here so just
like onChange=()=>{} in vanilla React or JS? then destructured in the props
for LoginForm? */

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
