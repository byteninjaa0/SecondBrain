import { useEffect, useRef } from "react";

export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div
        ref={ref}
        className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] rounded-full
        bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400
        blur-[160px] opacity-40 transition-transform duration-300"
      />
      <div
        className="absolute bottom-[-40%] right-[-30%] w-[900px] h-[900px]
        bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500
        blur-[180px] opacity-30 animate-pulse"
      />
    </div>
  );
}
