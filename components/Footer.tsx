import { DetailedHTMLProps, HTMLAttributes } from "react";
import Container from "./Container";

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <Footer {...props}>
      <Container>{children}</Container>
    </Footer>
  );
};

export default Footer;
