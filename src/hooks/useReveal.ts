import { useEffect, useRef, useState } from 'react';

/**
 * Следит, попал ли элемент в экран.
 * Когда пользователь прокручивает обратно вверх и элемент уходит ниже экрана,
 * флаг сбрасывается, и анимация сработает заново.
 */
export function useReveal<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else if (entry.boundingClientRect.top > 0) setVisible(false);
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}
