import type React from "react"
import { Label } from "@/components/ui/label"

interface FormFieldProps {
  label: string
  htmlFor: string
  children: React.ReactNode
}

export function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-[#030303]">
        {label}
      </Label>
      {children}
    </div>
  )
}
