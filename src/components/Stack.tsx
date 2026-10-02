import { coreStack, extraStack } from '../config/site';
import './Stack.css';

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="stack__inner">
        <div className="stack__head">
          <div className="stack__heading">
            <span className="label">02 / Стек</span>
            <h2 className="section-title">Инструменты</h2>
          </div>
          <p className="stack__sub">Без лишнего: только то, чем владею.</p>
        </div>

        <ul className="stack__core">
          {coreStack.map((tech, i) => (
            <li key={tech.name} className="stack__card">
              <span className="stack__tag">{String(i + 1).padStart(2, '0')} / основа</span>
              <span className="stack__name">{tech.name}</span>
              <span className="stack__note">{tech.note}</span>
            </li>
          ))}
        </ul>

        <div className="stack__extra">
          <span className="stack__extra-label">Также</span>
          <ul className="stack__chips">
            {extraStack.map((item) => (
              <li key={item} className="stack__chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
