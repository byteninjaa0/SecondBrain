import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!bgRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div
        ref={bgRef}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-400 rounded-full blur-[120px] opacity-40 transition-transform duration-300"
      />
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-indigo-500 rounded-full blur-[140px] opacity-40"
      />
    </div>
  );
}
