import { Fragment } from 'react';
import './Marquee.css';

interface MarqueeProps {
  words: string[];
}

/** Бесконечная бегущая строка: список выводится дважды и сдвигается на половину. */
export default function Marquee({ words }: MarqueeProps) {
  const doubled = [...words, ...words];

  return (
    <div className="marquee" aria-label={`Технологии: ${words.join(', ')}`}>
      <div className="marquee__track" aria-hidden="true">
        {doubled.map((word, i) => (
          <Fragment key={i}>
            <span className="marquee__word">{word}</span>
            <span className="marquee__sep" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
