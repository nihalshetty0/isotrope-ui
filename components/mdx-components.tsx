import ComponentPreview from "@/components/component-preview";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { LinkButton } from "@/registry/default/ui/link-button";
import Link from "next/link";

export const mdxComponents = {
  ComponentPreview,

  Button,
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-8 text-lg", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-6 text-base", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mt-3 body-01", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <code className={cn("code-01", className)} {...props} />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn("link-01", className)} {...props} />
  ),
  LinkButton: LinkButton,
};
