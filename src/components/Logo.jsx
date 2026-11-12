import React from 'react';
import logoDark from '../assets/attox_logo_dark.png';
import logoWhite from '../assets/attox_logo_white.png';

export default function Logo({ className = "h-8 w-auto", inverted = false }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src={inverted ? logoWhite : logoDark}
        alt="Attox Logo"
        className="h-full w-auto object-contain max-h-9"
        loading="eager"
      />
    </div>
  );
}
