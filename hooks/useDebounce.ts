import { useCallback, useEffect, DependencyList } from "react";

type EffectFunction = () => void;

export default function useDebounce(
  effect: EffectFunction,
  dependencies: DependencyList,
  delay: number
): void {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
