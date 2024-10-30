import * as React from "react";
import { Tag } from "@/registry/default/ui/tag";

export default function TagSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00">
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Tag size="sm">Tag content</Tag>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Tag size="md">Tag content</Tag>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Tag size="lg">Tag content</Tag>
      </div>
    </div>
  );
}
