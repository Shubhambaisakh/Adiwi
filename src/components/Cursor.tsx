import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);

  // Position references to avoid React re-renders on mousemove
  const mouseCoords = useRef({ x: 0, y: 0 });
  const cursorCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check if device is mobile/tablet to completely disable custom cursor for better performance/ux
    const checkDevice = () => {
      isMobile.current = window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      
      const cursor = cursorRef.current;
      const follower = followerRef.current;
      
      if (isMobile.current) {
        if (cursor) cursor.style.display = "none";
        if (follower) follower.style.display = "none";
      } else {
        if (cursor) cursor.style.display = "block";
        if (follower) follower.style.display = "block";
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile.current) return;
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (isMobile.current) return;
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering over input fields or textareas to let browser native text cursor show
      const isInput = 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.tagName === "SELECT" ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.isContentEditable;
      
      setIsOverInput(!!isInput);

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    // Smooth animation loop
    const updatePositions = () => {
      if (isMobile.current) {
        animationFrameId.current = requestAnimationFrame(updatePositions);
        return;
      }

      const cursor = cursorRef.current;
      const follower = followerRef.current;

      if (cursor && follower) {
        const targetX = mouseCoords.current.x;
        const targetY = mouseCoords.current.y;

        // Core dot follows the mouse instantly (0 delay) for flawless, latency-free response
        cursorCoords.current.x = targetX;
        cursorCoords.current.y = targetY;

        // Outer follower circle follows with smooth fluid easing (0.15 lerp)
        followerCoords.current.x += (targetX - followerCoords.current.x) * 0.15;
        followerCoords.current.y += (targetY - followerCoords.current.y) * 0.15;

        // Apply smooth transformations using hardware-accelerated translate3d
        cursor.style.transform = `translate3d(${cursorCoords.current.x}px, ${cursorCoords.current.y}px, 0) translate(-50%, -50%)`;
        follower.style.transform = `translate3d(${followerCoords.current.x}px, ${followerCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(updatePositions);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    animationFrameId.current = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Hide the custom cursor completely on mobile/tablet or when hovering over inputs
  const visibilityClass = isOverInput ? "opacity-0 scale-50" : "opacity-100 scale-100";

  return (
    <>
      {/* Small Core Dot - Instant alignment with system mouse pointer */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-[#FF8C42] rounded-full pointer-events-none z-[9999] will-change-transform transition-all duration-200 ease-out ${visibilityClass}`}
        style={{
          transform: "translate3d(-20px, -20px, 0) translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(255, 140, 66, 0.6)"
        }}
      />
      {/* Outer Follower Circle - Smooth, high-end delayed transition ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full border border-[#FF8C42]/50 pointer-events-none z-[9998] transition-all duration-300 ease-out will-change-transform ${visibilityClass} ${
          isHovering ? "w-16 h-16 bg-[#FF8C42]/10 border-[#FF8C42]" : "w-10 h-10"
        }`}
        style={{
          transform: "translate3d(-50px, -50px, 0) translate(-50%, -50%)"
        }}
      />
    </>
  );
};

export default Cursor;
