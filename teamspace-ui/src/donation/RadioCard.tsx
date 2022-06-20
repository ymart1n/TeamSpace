import React from "react";

interface Props {
  value: number;
  selected: number;
}

const RadioCard = (props: Props) => {
  return (
    <div>
      <label
        htmlFor={props.value + "pounds"}
        className="relative flex flex-col sm:p-10 bg-white justify-center h-16 rounded-lg shadow-md shadow-sky-200/50 cursor-pointer"
      >
        <span className="font-bold text-gray-900">
          <div className="text-sm md:text-2xl mr-1">{props.value}</div>
          <div className="text-xs md:text-lg uppercase">pounds</div>
        </span>
        <input
          type="radio"
          name="fixedAmount"
          id={props.value + "pounds"}
          value={props.value}
          className="absolute h-0 w-0 appearance-none"
          checked={props.selected === props.value}
          readOnly
        />
        <span
          aria-hidden="true"
          className="hidden absolute inset-0 border border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
        >
          <span className="absolute top-2 right-2 h-4 w-4 inline-flex items-center justify-center rounded-full bg-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </label>
    </div>
  );
};

export default RadioCard;
