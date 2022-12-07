import React from "react";
const variantClasses = {
  h1: "text-[18px]",
  h2: "text-[16px]",
  h3: "text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
