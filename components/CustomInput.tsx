import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input, InputProps } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInputProps {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  type: string;
  placeholder: string;
  label: string;
}

const CustomInput = ({
  control,
  name,
  type,
  placeholder,
  label,
}: CustomInputProps) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex flex-col w-full">
              <FormControl>
                <Input
                  type={type}
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomInput;
