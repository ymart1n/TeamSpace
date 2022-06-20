import React from "react";
import { FieldHookConfig, useField } from "formik";

type TextAreaFieldProps = FieldHookConfig<string> & {
  label: string;
  placeholder?: string;
};

const TextAreaField = ({
  label,
  placeholder,
  ...props
}: TextAreaFieldProps) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 0) || meta.touched;

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
            className={`text-sm ${meta.error ? "text-red-500" : ""}`}
          >
            {meta.error ? meta.error : ""}
          </div>
        ) : null}
      </div>
      <textarea
        {...field}
        placeholder={placeholder}
        rows={4}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
        className={`textarea textarea-bordered resize-none border-2 text-md md:text-lg ${
          showFeedback ? (meta.error ? "textarea-error" : "") : ""
        }`}
      />
    </div>
  );
};

export default TextAreaField;
