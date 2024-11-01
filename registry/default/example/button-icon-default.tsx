import * as React from "react"
import { IconButton } from "@/registry/default/ui/icon-button"
import { PlusIcon } from "@radix-ui/react-icons"

export default function ButtonIconDefault() {
  return (
    <IconButton>
      <PlusIcon className="h-4 w-4" />
    </IconButton>
  )
}