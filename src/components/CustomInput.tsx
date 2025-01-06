import { forwardRef, InputHTMLAttributes, RefObject } from "react";

type CustomInputProps = {
  label?: string;
  errorMsg?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
  ({ label, errorMsg, inputRef, ...inputProps }, ref) => {
    console.log(ref);

    return (
      <div ref={ref}>
        <label>
          {label}
          <input {...inputProps} ref={inputRef} />
        </label>
        {!!errorMsg && <span>{errorMsg}</span>}
      </div>
    );
  }
);

export default CustomInput;
