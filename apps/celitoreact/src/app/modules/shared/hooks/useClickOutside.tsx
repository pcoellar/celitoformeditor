import { useEffect, useState } from "react";

export default function useClickedOutside(ref) {
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickedOutside(true);
      }
      else {
        setClickedOutside(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return clickedOutside;
}
