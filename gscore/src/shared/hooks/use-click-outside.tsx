import { useEffect, RefObject } from "react";

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  refCan?: RefObject<T>
) => {
  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & { composedPath(): Node[] };
      if (ref?.current && !_event.composedPath().includes(ref?.current)) {
        if (refCan?.current && !_event.composedPath().includes(refCan?.current))
          handler();
      }

      return;
    };
    document.body.addEventListener("click", handleOutside);
    return () => {
      document.body.removeEventListener("click", handleOutside);
    };
  }, [ref, handler, refCan]);
};
