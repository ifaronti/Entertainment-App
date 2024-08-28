import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants
};

export enum ButtonVariants {
  Default,
  Primary,
}

export const buttonVariantMap: Record<ButtonVariants, string> = {
  [ButtonVariants.Default]: "",
  [ButtonVariants.Primary]: "primary"
}

const Button = ({ className, children, variant = ButtonVariants.Default, ...props }: ButtonProps) => {
  return (
    <button className={twMerge(classNames("flex items-center justify-center", buttonVariantMap[variant]))} {...props}>
      {children}
    </button>
  );
};

export default Button;