import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/icons/logo.svg"}
          width={32}
          height={23}
          alt="VidChatHub LOGO"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden ">
          VidChat Hub
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
}
