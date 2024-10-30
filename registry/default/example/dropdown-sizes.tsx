import * as React from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  DropdownValue,
} from "@/registry/default/ui/dropdown";

export default function DropdownSizes() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-edge-subtle-00">
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Dropdown size="sm">
          <DropdownTrigger>
            <DropdownValue placeholder="Small dropdown" />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
            <DropdownItem value="option3">Option 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Dropdown size="md">
          <DropdownTrigger>
            <DropdownValue placeholder="Medium dropdown" />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
            <DropdownItem value="option3">Option 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
      <div className="flex items-center justify-center border-b border-r border-edge-subtle-00 p-4">
        <Dropdown size="lg">
          <DropdownTrigger>
            <DropdownValue placeholder="Large dropdown" />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem value="option1">Option 1</DropdownItem>
            <DropdownItem value="option2">Option 2</DropdownItem>
            <DropdownItem value="option3">Option 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </div>
  );
}
