import React from "react";
import { FieldHookConfig, useField } from "formik";

type TextInputFieldProps = FieldHookConfig<string> & {
  label: string;
  helptext?: string;
  placeholder?: string;
  isRequired?: boolean;
};

const TextInputField = ({
  label,
  helptext,
  isRequired,
  placeholder,
  ...props
}: TextInputFieldProps) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  // when focused, show feedback when input is at least 1 chars
  const showFeedback =
    !!didFocus && field.value.trim().length >= 1 && meta.touched;

  return (
    <div className="form-control flex space-y-1 mb-4">
      <div className="flex items-center justify-between">
        <label htmlFor={props.id} className="text-md md:text-lg">
          {label}
        </label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className={`text-sm ${
              meta.error ? "text-red-500" : "text-green-600"
            }`}
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...field}
        placeholder={placeholder}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
        className={`input input-bordered border-2 text-md md:text-lg ${
          showFeedback
            ? isRequired
              ? meta.error
                ? "input-error"
                : "input-success"
              : meta.error
              ? "input-error"
              : ""
            : ""
        }`}
      />
      {(helptext !== "" || !helptext) && (
        <div
          className="text-xs text-left text-slate-500"
          id={`${props.id}-help`}
          tabIndex={-1}
        >
          {helptext}
        </div>
      )}
    </div>
  );
};

export default TextInputField;
