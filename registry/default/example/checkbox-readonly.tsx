import * as React from "react";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function CheckboxReadOnly() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms3" readOnly checked />
      <Label labelType="checkbox" htmlFor="terms3">
        Read-only checkbox
      </Label>
    </div>
  );
}
