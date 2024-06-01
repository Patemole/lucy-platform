
import { useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = (key, value) => {
    console.log(`Setting localStorage item: ${key} = ${value}`);
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    console.log(`Getting localStorage item: ${key} = ${value}`);
    return value;  // Do not set state here
  };

  const removeItem = (key) => {
    console.log(`Removing localStorage item: ${key}`);
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};


/*
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  if (!key) {
    throw new Error("Key is required in useLocalStorage");
  }

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error getting localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      console.log(`Setting localStorage item: ${key} = ${JSON.stringify(valueToStore)}`);
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  const setItem = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  };

  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      console.log(`Getting localStorage item: ${key} = ${item}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting localStorage key “${key}”:`, error);
      return null;
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
      console.log(`Removing localStorage item: ${key}`);
    } catch (error) {
      console.error(`Error removing localStorage key “${key}”:`, error);
    }
  };

  return { storedValue, setItem, getItem, removeItem };
};
*/