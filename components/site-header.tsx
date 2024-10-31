"use client";

import { usePathname } from "next/navigation";
import { IconButton } from "@/registry/default/ui/icon-button";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import * as Dialog from "@radix-ui/react-dialog";

import Link from "next/link";
import Sidebar, { sidebarItems } from "./sidebar-nav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-10 border-b border-edge-subtle-00 bg-background px-4">
      <div className="flex h-12 items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-0.5">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconButton
                className="text-icon-secondary md:hidden"
                variant="ghost"
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-overlay" />
              <Dialog.Content className="fixed inset-0 max-w-md bg-background focus:outline-none">
                <Dialog.Title className="sr-only">Components</Dialog.Title>

                <div className="flex items-center gap-2">
                  <Dialog.Close asChild>
                    <IconButton
                      className="ml-auto text-icon-secondary"
                      size={"md"}
                      variant="ghost"
                      aria-label="Close"
                    >
                      <Cross2Icon />
                    </IconButton>
                  </Dialog.Close>
                </div>

                <ul className="py-4">
                  {sidebarItems.map((item, index) => {
                    const itemPath = `/${item.toLowerCase().replace(" ", "-")}`;
                    const isActive = pathname === itemPath;
                    return (
                      <li key={index} className="relative">
                        <Dialog.Close asChild>
                          <Link
                            href={itemPath}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "md" }),
                              "w-full text-left text-inherit",
                              {
                                "bg-background-selected": isActive,
                              },
                            )}
                          >
                            {item}
                          </Link>
                        </Dialog.Close>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-background-brand" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <Logo />
        </div>

        {/* <div className=""></div> */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex h-full items-center justify-between">
      <Link
        href={"/"}
        className={
          "px-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        }
      >
        <div className="flex h-full items-center gap-1.5">
          <svg
            className="size-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#0066ff", stopOpacity: 1 }}
                />
                <stop
                  offset="10%"
                  style={{ stopColor: "#0066ff", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="32" fill="url(#grad)" />
          </svg>
          <span className="font-[var(--font-rethink),sans-serif] text-base font-medium tracking-tight">
            isotrope/ui
          </span>
        </div>
      </Link>
    </div>
  );
};
