import { useEffect, useRef, useState } from "react";

export function useFirstRender(): boolean {
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    setIsFirst(false);
  }, []);

  return isFirst;
}
