"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const sidebarItems = [
  "Accordion",
  "Button",
  "Checkbox",
  "Dropdown",
  "Icon Button",
  "Input",
  "Link Button",
  "Popover",
  "Radio Group",
  "Tag",
  "Tooltip",
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      //  className="hidden w-56 overflow-auto md:block"
      className="fixed top-12 z-30 hidden h-[calc(100vh-3.2rem)] w-full shrink-0 overflow-auto border-r border-edge-subtle-00 md:sticky md:block"
    >
      <ul className="py-2">
        {sidebarItems.map((item, index) => {
          const itemPath = `/${item.toLowerCase().replace(" ", "-")}`;
          const isActive = pathname === itemPath;
          return (
            <li key={index} className="relative">
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
              {isActive && (
                <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-background-brand" />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
