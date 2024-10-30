import * as React from "react";
import { Input } from "@/registry/default/ui/input";

export default function InputSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00">
      <div className="flex flex-col border-b border-r border-edge-subtle-00 p-4">
        <Input inputSize="sm" placeholder="Small input" />
      </div>
      <div className="flex flex-col border-b border-r border-edge-subtle-00 p-4">
        <Input inputSize="md" placeholder="Medium input" />
      </div>
      <div className="flex flex-col border-b border-r border-edge-subtle-00 p-4">
        <Input inputSize="lg" placeholder="Large input" />
      </div>
    </div>
  );
}
