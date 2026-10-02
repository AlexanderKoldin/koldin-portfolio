import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import './Spotlight.css';

/**
 * Мягкое красное свечение, которое следует за курсором.
 * Позиция меняется напрямую через style, без setState,
 * чтобы движение мыши не перерисовывало приложение.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      });
    };

    const onLeave = () => {
      el.style.left = '';
      el.style.top = '';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced]);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
