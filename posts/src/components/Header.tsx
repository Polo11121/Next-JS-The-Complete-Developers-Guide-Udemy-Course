import { UserAuthentication } from "@/components";
import { paths } from "@/lib/paths";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export const Header = () => (
  <Navbar className="shadow mb-6">
    <NavbarBrand>
      <Link href={paths.home()} className="font-bold">
        Discuss
      </Link>
    </NavbarBrand>
    <NavbarContent justify="center">
      <NavbarItem>
        <Input />
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <UserAuthentication />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);
