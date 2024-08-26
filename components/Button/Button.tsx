import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={twMerge(classNames("flex items-center justify-center"))} {...props}>
      {children}
    </button>
  );
};

export default Button;
