import ComponentPreview from "@/components/ComponentPreview";
import ComponentSource from "@/components/ComponentSource";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";

export const mdxComponents = {
  ComponentPreview,
  ComponentSource,
  Button,
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-6 text-base", className)} {...props} />
  ),
};
