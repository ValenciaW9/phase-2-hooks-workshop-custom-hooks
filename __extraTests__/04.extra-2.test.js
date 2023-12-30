import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const existingValue = localStorage.getItem(key);
    return existingValue ? JSON.parse(existingValue) : initialValue;
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setValue(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}