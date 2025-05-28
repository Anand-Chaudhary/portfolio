'use client';

import { useEffect, useState, useRef } from 'react';

export const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        
        setDotPosition(prev => ({
          x: prev.x + (position.x - prev.x) * 0.15,
          y: prev.y + (position.y - prev.y) * 0.15
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: dotPosition.x,
        top: dotPosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-3 h-3 bg-blue-500 rounded-full opacity-80" />
    </div>
  );
}; 