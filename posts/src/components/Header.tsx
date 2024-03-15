import { Search, UserAuthentication } from "@/components";
import { paths } from "@/lib/paths";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";

export const Header = () => (
  <Navbar className="shadow mb-6">
    <NavbarBrand>
      <Link href={paths.home()} className="font-bold">
        Discuss
      </Link>
    </NavbarBrand>
    <NavbarContent justify="center">
      <NavbarItem>
        <Suspense>
          <Search />
        </Suspense>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <UserAuthentication />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);
