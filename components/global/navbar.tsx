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
import { usePathname } from "next/navigation";
import { useAppContext } from "@/lib/context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { user, logout } = useAppContext();

  return (
    <header
      className={cn(
        "w-full z-40 bg-white transition-all duration-500 ease-in-out sticky top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      )}
    >
      <div className="w-full max-w-[1850px] mx-auto flex h-[90px] items-center px-4 nav:px-6">
        <Link href="/" className="flex mr-auto" prefetch={false}>
          <Logo url="/logo-new.png" />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="nav:hidden">
              <MenuIcon className="h-8 w-8 text-primary font-extrabold" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="max-w-[300px] bg-white border-none px-[15px]"
          >
            <SheetHeader className="mb-10">
              <Logo url="/logo-new.png" />
            </SheetHeader>
            <div className="grid py-6">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground pl-3",
                    path === item.href ? "bg-accent" : "transparent"
                  )}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                  }}
                >
                  <span className="mr-2 truncate">{item.label}</span>
                </Link>
              ))}

              {!user?.email ? (
                <Link
                  href="/login"
                  className={cn(
                    "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground pl-3",
                    path === "/login" ? "bg-accent" : "transparent"
                  )}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                  }}
                >
                  <span className="mr-2 truncate">Login</span>
                </Link>
              ) : (
                <>
                  <Link
                    href={
                      user?.role === "admin"
                        ? "/admin-dashboard"
                        : "/doctors-dashboard"
                    }
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground pl-3"
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <span className="mr-2 truncate">My dashboard</span>
                  </Link>
                  <Button
                    variant="special"
                    size="special"
                    onClick={logout}
                    className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground pl-3"
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
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

          {!user?.email ? (
            <Link
              href="/login"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href={
                  user?.role === "admin"
                    ? "/admin-dashboard"
                    : "/doctors-dashboard"
                }
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              >
                My dashboard
              </Link>

              <Button
                variant="special"
                size="special"
                onClick={logout}
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              >
                Logout
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
