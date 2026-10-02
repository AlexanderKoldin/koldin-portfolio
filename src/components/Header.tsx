import { useEffect, useRef } from 'react';
import './Header.css';

export default function Header() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = progressRef.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Основная навигация">
        <div className="header__menu">
          <a href="#about" className="header__link">
            Обо мне
          </a>
          <a href="#stack" className="header__link">
            Стек
          </a>
          <a href="#contact" className="header__cta">
            Связаться
          </a>
        </div>
      </nav>
      <div ref={progressRef} className="header__progress" aria-hidden="true" />
    </header>
  );
}
