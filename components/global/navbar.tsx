"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MenuIcon } from "lucide-react";

import { cn, scrollToSection } from "@/lib/utils";
import Logo from "./logo";
import { menuItems } from "@/utils/constants";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <header
      className={cn(
        "w-full z-40 bg-white transition-all duration-500 ease-in-out sticky top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      )}
    >
      <div className="w-full max-w-[1850px] mx-auto flex h-[90px] items-center px-4 nav:px-6">
        <Link href="/" className="flex mr-auto" prefetch={false}>
          <Logo url="/logo.jpg" />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="nav:hidden">
              <MenuIcon className="h-8 w-8 text-primary font-extrabold" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="max-w-[300px] bg-secondary border-none px-[15px]"
          >
            <SheetHeader className="mb-10">
              <Logo url="/logo.png" />
            </SheetHeader>
            <div className="grid py-6">
              {menuItems.map((item, i) => (
                <Button
                  key={i}
                  variant="special"
                  size="special"
                  onClick={() => {
                    scrollToSection(item.href);
                    setOpen(false);
                  }}
                  className="flex w-full items-center text-[15px] font-medium h-[46px] text-white border-b border-white/15"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <SheetFooter className="mt-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 mt-4">
                  <Button
                    onClick={() =>
                      handleRedirect(
                        "https://www.facebook.com/profile.php?id=100092204199645"
                      )
                    }
                    size="icon"
                    className="bg-[#1f403d] rounded-full"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() =>
                      handleRedirect(
                        "https://www.linkedin.com/company/artifconnect/"
                      )
                    }
                    size="icon"
                    className="bg-[#1f403d] rounded-full"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <nav className="ml-auto hidden nav:flex items-center gap-2 2lg:gap-6">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
