import { useEffect, useState } from "react";

function useDebounce<T>(
  value: T,
  delay?: number,
  onDebounced?: (p: T) => void
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      if (onDebounced) onDebounced(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, onDebounced]);

  return debouncedValue;
}

export default useDebounce;
