import { useRef, type MouseEvent } from "react";

export default function HoverBlock() {
  const ref = useRef<HTMLDivElement>(null);
  function handleMouseOver(e: MouseEvent<HTMLDivElement>) {
    const el = e.target as HTMLDivElement;
    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 400);
  }

  return (
    <>
      <div
        ref={ref}
        onMouseOver={handleMouseOver}
        className="aspect-square w-[10vw] bg-white opacity-0 transition-all duration-[.4s] ease-[cubic-bezier(.645,.045,.355,1)] sm:w-14"
      />
    </>
  );
}
