"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export const FormButton = ({
  children,
  isLoading,
  type,
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending || isLoading} {...props} type={type || "submit"}>
      {children}
    </Button>
  );
};
