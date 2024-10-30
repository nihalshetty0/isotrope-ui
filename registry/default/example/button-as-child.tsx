import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="#">Link as Button</Link>
    </Button>
  );
}
