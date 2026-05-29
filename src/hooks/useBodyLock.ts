import { useEffect } from "react";

export const useBodyLock = (locked: boolean) => {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [locked]);
};
