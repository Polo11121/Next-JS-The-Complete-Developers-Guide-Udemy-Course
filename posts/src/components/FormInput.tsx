"use client";

import { Input, InputProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export const FormInput = ({ isDisabled, ...props }: InputProps) => {
  const { pending } = useFormStatus();

  return <Input isDisabled={pending || isDisabled} {...props} />;
};
