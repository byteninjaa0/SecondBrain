import { forwardRef, useState, ReactNode } from "react";
import { Eye } from "./icon/Eye";
import { Eyeoff } from "./icon/Eyeoff";

type InputSize = "sm" | "md" | "lg";
type InputType = "text" | "password" | "email" | "number" | "search";

interface InputProps {
  type?: InputType;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  size?: InputSize;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  className?: string;
}

const sizeMap: Record<InputSize, string> = {
  sm: "h-9 text-sm px-3",
  md: "h-11 text-base px-4",
  lg: "h-14 text-lg px-5",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      value,
      defaultValue,
      onChange,
      size = "md",
      disabled = false,
      required = false,
      maxLength,
      autoComplete = "off",
      leftIcon,
      rightIcon,
      className = "",
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const actualType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    return (
      <div className="relative m-2 w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={actualType}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className={`
            w-full rounded border outline-none
            ${sizeMap[size]}
            ${leftIcon ? "pl-10" : ""}
            ${(rightIcon || type === "password") ? "pr-10" : ""}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            ${className}
          `}
        />

        {type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70"
          >
            {showPassword ? <Eye /> : <Eyeoff />}
          </button>
        ) : (
          rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70">
              {rightIcon}
            </div>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
