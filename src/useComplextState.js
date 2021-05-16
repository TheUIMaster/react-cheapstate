import { useEffect, useState } from "react";
export const useClassState = (initialState) => {
  const [state, setState] = useState(initialState.data);
  useEffect(() => {
    if (!initialState._____loaded) {
      initialState.data = state;
      initialState._____loaded = true;
      Object.keys(initialState)
        .filter((key) => key !== "data")
        .forEach((key) => {
          let temp = initialState[key];
          initialState[key] = (...props) => {
            initialState.data = JSON.parse(JSON.stringify(initialState.data));
            temp.call(initialState, ...props);
            setState(initialState.data);
          };
        });
    }
  });
};
