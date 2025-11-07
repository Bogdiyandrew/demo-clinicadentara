'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


interface PlaceholderProps {
  color: string; 
  label: string; 
}

interface SliderProps {
  beforePlaceholder: PlaceholderProps;
  afterPlaceholder: PlaceholderProps;
}

export default function BeforeAfterSlider({ beforePlaceholder, afterPlaceholder }: SliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - bounds.left) / bounds.width) * 100;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;
    setPosition(newPosition);
  }, [isDragging]);

  // Event Listeners (rămân la fel)
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleMouseLeave = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >

      <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${beforePlaceholder.color}`}>
        <span className="text-4xl font-bold text-white opacity-70">
          {beforePlaceholder.label}
        </span>
      </div>


      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center ${afterPlaceholder.color}`}
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <span className="text-4xl font-bold text-white opacity-70">
          {afterPlaceholder.label}
        </span>
      </div>


      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
}