import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function TooltipSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00">
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Small Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent size="sm">
              <p>Small tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Medium Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent size="md">
              <p>Medium tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Large Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent size="lg">
              <p>Large tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
