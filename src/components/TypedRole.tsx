import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TypedRoleProps {
  words: string[];
}

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 2800;

/**
 * Строка «работаю с …», где последнее слово печатается и стирается по кругу.
 * Состояние живёт только в этом компоненте, поэтому перерисовывается только он.
 */
export default function TypedRole({ words }: TypedRoleProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const word = words[index];
    let timer: number;

    if (!deleting && length === word.length) {
      timer = window.setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    } else {
      timer = window.setTimeout(
        () => setLength((l) => l + (deleting ? -1 : 1)),
        deleting ? DELETE_MS : TYPE_MS,
      );
    }
    return () => window.clearTimeout(timer);
  }, [reduced, words, index, length, deleting]);

  const text = reduced ? words[0] : words[index].slice(0, length);

  return (
    <div className="hero__typed" aria-hidden="true">
      <span className="hero__prompt">&gt;</span>
      <span className="hero__typed-lead">работаю с </span>
      <span>{text}</span>
      <span className="hero__caret" />
    </div>
  );
}
