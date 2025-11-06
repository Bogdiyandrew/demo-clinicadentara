// Marcăm aceasta ca o Componentă Client deoarece are nevoie de interactivitate (state și event listeners)
'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'; // Vei avea nevoie de pachetul @heroicons/react

/* NOTĂ: Pentru a folosi pictogramele de mai sus, rulează în terminal:
   npm install @heroicons/react
*/

export default function BeforeAfterSlider() {
  // 'position' va fi procentajul (0-100) al liniei de diviziune
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Funcție pentru a gestiona mișcarea (atât mouse cât și touch)
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - bounds.left) / bounds.width) * 100;

    // Restricționăm poziția între 0 și 100
    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;

    setPosition(newPosition);
  }, [isDragging]);

  // Event Listeners pentru Mouse
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleMouseLeave = () => setIsDragging(false);

  // Event Listeners pentru Touch
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    // Containerul principal
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
      // Adăugăm event listeners aici
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* Imaginea/Placeholder-ul "Înainte" (stânga)
        Folosim un bloc colorat (roșu-aprins) ca placeholder
      */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-red-400">
        <span className="text-4xl font-bold text-white opacity-70">ÎNAINTE</span>
      </div>

      {/* Imaginea/Placeholder-ul "După" (dreapta)
        Folosim 'clip-path' pentru a o tăia în funcție de poziția slider-ului.
        Folosim un bloc colorat (verde-aprins) ca placeholder.
      */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-green-400"
        // 'clip-path: inset(Y X Y X)' - tăiem din stânga
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <span className="text-4xl font-bold text-white opacity-70">DUPĂ</span>
      </div>

      {/* Linia de diviziune (Slider-ul)
        O poziționăm folosind 'left' pe baza procentajului
      */}
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Mânerul circular din mijlocul liniei */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
}