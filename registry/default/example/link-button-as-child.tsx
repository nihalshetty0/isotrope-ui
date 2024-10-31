import * as React from "react";
import { LinkButton } from "@/registry/default/ui/link-button";
import Link from "next/link";

export default function LinkButtonAsChild() {
  return (
    <LinkButton asChild>
      <Link href="#">Next.js Link</Link>
    </LinkButton>
  );
}
