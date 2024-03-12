"use server";

import * as auth from "@/auth";

export const signIn = () => auth.signIn("github");

export const signOut = () => auth.signOut();
