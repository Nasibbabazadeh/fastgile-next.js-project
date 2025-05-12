import { TRegisterUserSchema } from "@/shared/models/register.schema";
import { FieldError, UseFormRegister } from "react-hook-form";
import Input from "../input/input";
import React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import useTogglePassword from "@/hooks/useTogglePassword";

export type ValidFieldNames = keyof TRegisterUserSchema;

type FormFieldProps = {
  labelName: string;
  name: ValidFieldNames;
  register?: UseFormRegister<TRegisterUserSchema>;
  error?: FieldError;
  eyeIcon?: boolean;
  inputProps?: React.ComponentProps<typeof Input>;
};

export default function FormField({
  name,
  register,
  labelName,
  eyeIcon,
  error,
  inputProps,
}: FormFieldProps) {
  const { togglePassword, type, visible } = useTogglePassword();

  const inputType = eyeIcon ? type : inputProps?.type;

  return (
    <div>
      <label htmlFor={name}>{labelName}</label>
      <div>
        <Input
          {...(register ? register(name, { required: true }) : {})}
          aria-invalid={!!error}
          {...inputProps}
          type={inputType}
        />
        {eyeIcon && (
          <button
            onClick={togglePassword}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && <span >{error.message}</span>}
    </div>
  );
}
