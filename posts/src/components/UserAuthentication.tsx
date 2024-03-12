"use client";

import { AuthenticationButtons } from "@/components";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

export const UserAuthentication = () => {
  const session = useSession();
  const isAuthenticated = Boolean(session?.data?.user);

  if (session.status === "loading") {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return (
      <Popover placement="left">
        <PopoverTrigger className="cursor-pointer">
          <Avatar src={session.data?.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <AuthenticationButtons isAuthenticated={isAuthenticated} />
        </PopoverContent>
      </Popover>
    );
  }

  return <AuthenticationButtons isAuthenticated={isAuthenticated} />;
};
