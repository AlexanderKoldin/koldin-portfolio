import TypedRole from './TypedRole';
import Marquee from './Marquee';
import { ArrowRight, Download, GitHub, Mail, Telegram } from './Icons';
import { contacts, links, marqueeWords, status, typedWords } from '../config/site';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <section id="top" className="hero__inner">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          {status}
        </p>

        <h1 className="hero__title">
          <span className="hero__first">Александр</span>
          <span className="hero__last">Колдин</span>
          <span className="hero__role">
            <span className="nw">Frontend-разработчик</span>
          </span>
        </h1>

        <TypedRole words={typedWords} />

        <p className="hero__text">
          Пишу на React и TypeScript чистый типизированный код.{' '}
          <br />
          Есть опыт <span className="nw">код-ревью</span> и работы в команде: задачи,
          обсуждения, сроки.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            Связаться
            <ArrowRight />
          </a>
          {links.resume && (
            <a href={links.resume} className="btn btn--ghost" download>
              Скачать резюме
              <Download />
            </a>
          )}
          <span className="hero__divider" aria-hidden="true" />
          <div className="hero__socials">
            {links.github && (
              <a href={links.github} className="icon-btn" aria-label="GitHub" target="_blank" rel="noreferrer">
                <GitHub />
              </a>
            )}
            <a href={contacts.telegram} className="icon-btn" aria-label="Telegram" target="_blank" rel="noreferrer">
              <Telegram />
            </a>
            <a href={`mailto:${contacts.email}`} className="icon-btn" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      <Marquee words={marqueeWords} />
    </div>
  );
}
