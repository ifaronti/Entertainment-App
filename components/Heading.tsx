import { TextProps } from "./Text";

export enum HeadingVariants {
  L,
  M,
  S,
}

export type HeadingProps = TextProps & {
  variant?: HeadingVariants;
};

const HEADING_MAP: Record<
  HeadingVariants,
  (props: HeadingProps) => React.ReactElement
> = {
  [HeadingVariants.L]: (props) => <h1 {...props} />,
  [HeadingVariants.M]: (props) => <h2 {...props} />,
  [HeadingVariants.S]: (props) => <h3 {...props} />,
};

const Heading = ({ variant = HeadingVariants.L, ...props }: HeadingProps) => {
  return HEADING_MAP[variant]({
    ...props,
    variant,
  });
};

export default Heading;
