import { contacts, links } from '../config/site';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__inner">
        <span className="label">03 / Контакты</span>
        <h2 className="contact__title">
          Давайте
          <br />
          знакомиться
        </h2>
        <p className="contact__text">Пишите на почту или в Telegram.</p>
        <a href={`mailto:${contacts.email}`} className="contact__email">
          {contacts.email}
        </a>
        <div className="contact__links">
          <a href={contacts.telegram} className="contact__link" target="_blank" rel="noreferrer">
            Telegram ↗
          </a>
          {links.github && (
            <a href={links.github} className="contact__link" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {links.resume && (
            <a href={links.resume} className="contact__link" download>
              Резюме (PDF) ↓
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
