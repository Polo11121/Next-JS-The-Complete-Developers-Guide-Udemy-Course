import { signIn, signOut } from "@/actions";
import { Button } from "@nextui-org/react";

type AuthenticationButtonsProps = {
  isAuthenticated: boolean;
};

export const AuthenticationButtons = ({
  isAuthenticated,
}: AuthenticationButtonsProps) => {
  const actionHandler = isAuthenticated ? signOut : signIn;

  return (
    <form action={actionHandler}>
      {isAuthenticated ? (
        <Button type="submit" color="primary" variant="flat">
          Sign Out
        </Button>
      ) : (
        <Button type="submit" color="secondary" variant="bordered">
          Sign In
        </Button>
      )}
    </form>
  );
};
