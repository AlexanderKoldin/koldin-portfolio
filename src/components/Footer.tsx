import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Александр Колдин</span>
      <span className="footer__mono">Frontend-разработчик · React · TypeScript</span>
    </footer>
  );
}
