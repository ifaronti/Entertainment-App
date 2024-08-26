import { DetailedHTMLProps, HTMLAttributes } from "react";
import classnames from "classnames"

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLParagraphElement
>;
const Card = ({ className, children, ...props }: CardProps) => {
  return <div className={classnames("card", className)} {...props}>{children}</div>;
};

export default Card;
