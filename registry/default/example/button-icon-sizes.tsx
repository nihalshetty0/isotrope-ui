import * as React from "react";
import { IconButton } from "@/registry/default/ui/icon-button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function ButtonIconSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00 lg:grid-cols-4">
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <IconButton size="sm">
          <PlusIcon className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <IconButton size="md">
          <PlusIcon className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <IconButton size="lg">
          <PlusIcon className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <IconButton size="xl">
          <PlusIcon className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
