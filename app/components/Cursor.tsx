"use client";

import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const delay = 0.1;
      targetPosition.current.x += (mousePosition.current.x - targetPosition.current.x) * delay;
      targetPosition.current.y += (mousePosition.current.y - targetPosition.current.y) * delay;

      if (cursorRef.current) {
        cursorRef.current.style.top = `${targetPosition.current.y - 30}px`; 
        cursorRef.current.style.left = `${targetPosition.current.x - 30}px`; 
      }
      
      // Update cursor position smoothly!
      requestAnimationFrame(updatePosition); 
    };

    // Start the position update loop!
    requestAnimationFrame(updatePosition); 

    // Clean up :)
    return () => cancelAnimationFrame(updatePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="absolute pointer-events-none opacity-45"
      style={{
        position: "absolute",
        height: "60px", 
        width: "60px",
        borderRadius: "50%",
        border: "1px solid black", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "none", 
        zIndex: 1000,
      }}
    >
      <div
        className="bg-black rounded-full"
        style={{
          height: "5px", 
          width: "5px",
        }}
      />
    </div>
  );
};

export default Cursor;
