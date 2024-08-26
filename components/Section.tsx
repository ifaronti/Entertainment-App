import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Section = (props: SectionProps) => {
  return <section {...props} />;
};

export default Section;
