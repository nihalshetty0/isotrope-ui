import * as React from "react";
import dynamic from "next/dynamic";
import { componentExample } from "@/content/docs/component-example";

interface ComponentPreviewProps {
  name: string;
  description?: string;
  className?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  description,
  className,
}) => {
  const Preview = React.useMemo(() => {
    const Component = componentExample.default[name]?.component;

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div className="mt-2 flex min-h-[350px] w-full items-center justify-center bg-background p-10">
      <React.Suspense fallback={<div>Loading...</div>}>
        {Preview}
      </React.Suspense>
    </div>
  );
};

export default ComponentPreview;
