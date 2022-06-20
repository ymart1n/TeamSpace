import React, { useState } from "react";
import RadioCard from "./RadioCard";

interface Props {
  initialCount: number;
  next: (values: any) => void;
}

const options = [5, 20, 50, 100];

const CountSelection = ({ initialCount, next }: Props) => {
  const [radioCount, setRadioCount] = useState(initialCount);
  const [customCount, setCustomCount] = useState(
    parseInt("" + (options.includes(radioCount) ? "" : radioCount))
  );

  function selectRadio(value: number) {
    // console.log(radioCount);
    setRadioCount(value);
    setCustomCount(NaN);
    // console.log(radioCount);
  }

  function handleCustomCount(e: any) {
    // console.log(customCount);
    if (parseInt(e.currentTarget.value) >= 1)
      setCustomCount(parseInt(e.currentTarget.value));
    // console.log(customCount);
  }

  function clearRadio() {
    // console.log(radioCount);
    setRadioCount(0);
  }

  function nextStep() {
    if (radioCount === 0 && (isNaN(customCount) || customCount <= 0))
      alert("please select an amount");
    else if (radioCount !== 0 && isNaN(customCount))
      next({ count: radioCount });
    else if (!isNaN(customCount)) {
      // console.log("hello" + customCount);
      next({ count: customCount });
    }
  }

  // useEffect(() => {
  //   // only for debug, showing that radioCount is really set to 0
  //   // console.log(radioCount);
  //   // console.log("radio count changed!");
  // }, [radioCount]);

  return (
    <div>
      <div className="text-xl font-bold uppercase">Join #TeamSpace</div>
      <p className="mx-10">Every $1 is one less pound of junk in the space.</p>
      <div className="w-full max-w-screen-md mx-auto">
        <div className="grid grid-cols-3 gap-2 sm:gap-8 my-10">
          {options.map((value) => {
            return (
              <div onClick={() => selectRadio(value)} key={value}>
                <RadioCard value={value} selected={radioCount} />
              </div>
            );
          })}
          <div
            className="col-span-2 h-16 shadow-md shadow-sky-200/50"
            onFocus={clearRadio}
          >
            <input
              type="number"
              min="1"
              placeholder="Other Amount"
              onChange={handleCustomCount}
              value={isNaN(customCount) ? "" : customCount}
              className="input h-full sm:py-10 sm:pl-7 items-center input-info w-full font-bold text-sm md:text-2xl"
            />
          </div>
        </div>
        <button
          className="btn btn-info border-0 bg-sky-300 w-1/2"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CountSelection;
