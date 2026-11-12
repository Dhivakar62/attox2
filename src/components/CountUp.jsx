import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({ value, duration = 1.4, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse target number from string (e.g., "1.14M", "267K", "95.2%", "300+", "120")
  const numericString = String(value).replace(/[^0-9.]/g, '');
  const targetNumber = parseFloat(numericString) || 0;
  const isDecimal = numericString.includes('.');
  const decimalPlaces = isDecimal ? numericString.split('.')[1].length : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * targetNumber;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, targetNumber, duration]);

  // Extract non-numeric prefix and suffix from original value if not explicitly given
  let calculatedSuffix = suffix;
  let calculatedPrefix = prefix;
  if (!suffix && !prefix) {
    const raw = String(value);
    const numIdx = raw.search(/[0-9]/);
    if (numIdx > 0) calculatedPrefix = raw.slice(0, numIdx);
    const lastNumIdx = raw.search(/[0-9](?=[^0-9]*$)/);
    if (lastNumIdx !== -1 && lastNumIdx < raw.length - 1) {
      calculatedSuffix = raw.slice(lastNumIdx + 1);
    }
  }

  return (
    <span ref={ref} className="tabular-nums">
      {calculatedPrefix}
      {isDecimal ? displayValue.toFixed(decimalPlaces) : Math.round(displayValue).toLocaleString()}
      {calculatedSuffix}
    </span>
  );
}
