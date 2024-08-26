import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Label from "../Label";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import InputError from "./InputError";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  errors?: string[];
  label?: React.ReactNode;
  wrapperClassName?: string;
};
const Input = ({
  errors,
  className,
  label,
  wrapperClassName,
  ...props
}: InputProps) => {
  return (
    <fieldset
      className={twMerge(classNames("flex flex-col gap-2", wrapperClassName))}
    >
      {label && <Label>{label}</Label>}
      <input {...props} />
      {errors && errors?.length > 0 && (
        <InputError messages={errors} className="" />
      )}
    </fieldset>
  );
};

export default Input;
