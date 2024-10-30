import * as React from "react";
import { Button } from "@/registry/default/ui/button";

export default function ButtonSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00 lg:grid-cols-6">
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4 lg:col-span-2">
        <Button size="sm">Button</Button>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4 lg:col-span-2">
        <Button size="md">Button</Button>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4 lg:col-span-2">
        <Button size="lg">Button</Button>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4 lg:col-span-3">
        <Button size="xl">Button</Button>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4 lg:col-span-3">
        <Button size="2xl">Button</Button>
      </div>
    </div>
  );
}
