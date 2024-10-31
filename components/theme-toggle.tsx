"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { tagVariants } from "../registry/default/ui/tag";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  // TODO: fix hydration warning
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-2">
      {["light", "dim", "dark", "system"].map((t) => (
        <button
          className={cn(
            tagVariants({ variant: t === theme ? "blue" : "outline" }),
            "focus:ring-1 focus:ring-focus focus:ring-offset-1 focus-visible:outline-none",
          )}
          key={t}
          onClick={() => setTheme(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
