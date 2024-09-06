"use client";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt={"Hamburger menu icon"}
            className="cursor-pointer sm:hidden pt-1"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-border-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={"/icons/logo.svg"}
              width={32}
              height={23}
              alt="VidChatHub LOGO"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white ">
              VidChat Hub
            </p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center text-white p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-1": isActive }
                        )}>
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <span className=" font-semibold ">
                          {link.label}
                        </span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
