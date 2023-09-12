import { ChangeEvent, useState } from "react";

// Receives type
// returns attributes required by the input: its type, value and the onChange handler.
// Also returns reset function that sets the value of all ""
export const useField = (type: string) => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    inputProps: {
      type,
      value,
      onChange,
    },
    reset,
  };
};
