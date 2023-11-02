import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const readFormLS = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  const [value, setValue] = useState(() => {
    const lsOrDie = readFormLS() !== null ? readFormLS() : initialValue;

    localStorage.setItem(key, JSON.stringify(lsOrDie));

    console.log("lsOrDie", lsOrDie);
    return lsOrDie;
  });

  const writeToLSandState = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, writeToLSandState];
};

export default useLocalStorage;
