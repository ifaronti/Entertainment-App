import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Text = (props: TextProps) => {
  return <p {...props} />;
};

export default Text;
