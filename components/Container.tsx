import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLParagraphElement
>;

const Container = ({ children, ...props }: ContainerProps) => {
  return <div {...props}>{children}</div>;
};

export default Container;
