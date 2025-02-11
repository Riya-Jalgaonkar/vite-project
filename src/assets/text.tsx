import React from "react";

export type TextProps = Partial<{
  className: string;
  as: any;
  size: string; // Add size property here
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size, // Add size property here
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={` ${className} ${size} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

