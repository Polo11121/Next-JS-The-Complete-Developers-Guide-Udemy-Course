"use client";

import { TextAreaProps, Textarea } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export const FormTextarea = ({ isDisabled, ...props }: TextAreaProps) => {
  const { pending } = useFormStatus();

  return <Textarea isDisabled={pending || isDisabled} {...props} />;
};
