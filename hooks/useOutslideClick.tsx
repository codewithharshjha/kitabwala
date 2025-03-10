"use client"
import { useEffect } from 'react';

function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Check if the click is outside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", listener);

    // Clean up the event listener on component unmount
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export default useOutsideClick;
