import { useState } from "react";
const InputForm = (validation) => {
  const [value, setValue] = useState("");
  const [blur, setblur] = useState(false);
  const valueIsValid = validation(value);
  const hasError = !valueIsValid && blur;
  const valueHandler = (event) => {
    setValue(event.target.value);
  };
  const blurHandler = () => {
    setblur(true);
  };
  const reset = () => {
    setValue("");
    setblur(false);
  };
  return {
    enteredValue: value,
    valueIsValid,
    hasError,
    valueHandler,
    blurHandler,
    reset,
  };
};
export default InputForm;
