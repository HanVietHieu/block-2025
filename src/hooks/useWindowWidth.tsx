import { useEffect, useState } from "react";

export const useWindowWidth = (limit: number): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(
    window.matchMedia(`(max-width: ${limit}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${limit}px)`);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [limit]);

  return isMatch;
};
