"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  name: string;
  children?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  touched,
  name,
  children,
  className,
  inputClassName,
  labelClassName,
  ...props
}) => {
  return (
    <div className={cn(" w-full grid gap-2", className)}>
      {label ? (
        <Label
          className={cn("flex justify-between items-center", labelClassName)}
          htmlFor={name}
        >
          <span>{label}</span>

          {touched && error ? (
            <span className="font-normal text-xs text-red-500 leading-none">
              {error}
            </span>
          ) : null}
        </Label>
      ) : null}

      {children || (
        <Input
          id={name}
          {...props}
          className={cn(
            "text-sm focus-visible:border-violet-500 focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            inputClassName
          )}
        />
      )}
    </div>
  );
};
