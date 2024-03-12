"use client";

import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: PropsWithChildren) => (
  <SessionProvider>
    <NextUIProvider>{children}</NextUIProvider>
  </SessionProvider>
);
