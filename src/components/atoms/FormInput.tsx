import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  icons?: React.ReactNode;
  message?: string;
  extraCss?: string;
}

const FormInput = ({
  labelText,
  icons,
  extraCss,
  message,

  ...props
}: FormInputProps) => {
  return (
    <div className="grid gap-1">
      <label className="flex items-center justify-start gap-1 text-md font-semibold text-black/60">
        {icons}
        {labelText}
        <p className="text-sm text-red-600 font-normal px-4 line-clamp-2">
          {message}
        </p>
      </label>

      <input
        className={`appearance-auto outline-2 outline-slate-500/20 rounded-md text-gray-600 px-3 py-1 focus:outline-primary/50 ${extraCss}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;
