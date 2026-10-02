import { useReveal } from '../hooks/useReveal';
import { rules } from '../config/site';
import './About.css';

export default function About() {
  const { ref, visible } = useReveal<HTMLUListElement>();

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__content">
          <span className="label">01 / Обо мне</span>
          <h2 className="about__title">
            Сменил <span className="nw">Mercedes-Benz</span>
            <br />
            на React.
          </h2>
          <p className="about__lead">
            Больше десяти лет в автобизнесе. Оттуда я вынес три правила, по которым работаю.
          </p>
          <ul ref={ref} className={`about__rules${visible ? ' about__rules--visible' : ''}`}>
            {rules.map((rule) => (
              <li key={rule.title} className="about__rule">
                <span className="about__marker" aria-hidden="true" />
                <span className="about__rule-body">
                  <span className="about__rule-title">{rule.title}</span>
                  <span className="about__rule-text">{rule.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__photo">
          <img
            src="/portrait.webp"
            alt="Александр Колдин"
            width={920}
            height={1094}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
