'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface PlaceholderProps {
  image?: string;
  color?: string;
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
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${beforePlaceholder.color || 'bg-slate-200'}`}>
        {beforePlaceholder.image ? (
          <Image
            src={beforePlaceholder.image}
            alt={beforePlaceholder.label}
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <span className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-bold rounded-full z-10">
          {beforePlaceholder.label}
        </span>
      </div>

      {/* After Image (Foreground - Clipped) */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center ${afterPlaceholder.color || 'bg-primary'}`}
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        {afterPlaceholder.image ? (
          <Image
            src={afterPlaceholder.image}
            alt={afterPlaceholder.label}
            fill
            className="object-cover"
            priority
          />
        ) : null}
        <span className="absolute bottom-4 right-4 px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-sm font-bold rounded-full z-10">
          {afterPlaceholder.label}
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 transition-transform duration-200 group-hover:scale-110">
          <ChevronLeftIcon className="h-4 w-4 text-slate-600" />
          <ChevronRightIcon className="h-4 w-4 text-slate-600" />
        </div>
      </div>
    </div>
  );
}