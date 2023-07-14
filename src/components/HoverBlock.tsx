import { useState } from "react";

export default function HoverBlock() {
  const [isActive, setIsActive] = useState(false);

  function handleMouseOver() {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 400);
  }

  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        className={`aspect-square w-[10vw] bg-white transition-all duration-[.4s] ease-[cubic-bezier(.645,.045,.355,1)] sm:w-14 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
