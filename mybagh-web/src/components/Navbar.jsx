import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const nav = (p) => { setPage(p); setOpen(false); window.scrollTo(0, 0); };

  return (
    <nav className="navbar">
      <button className="navbar__logo-btn" onClick={() => nav('home')} aria-label="Home">
        <img src="src/images/logo.jpg" alt="MyBagh" className="navbar__logo" />
        <span className="navbar__brand">MyBagh</span>
      </button>

      <button
        className={`navbar__burger${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links${open ? ' is-open' : ''}`}>
        {[['home','Home'],['breakfast','Breakfast Menu'],['menu','Restaurant Menu']].map(([key,label]) => (
          <li key={key}>
            <button
              className={`navbar__link${page === key ? ' active' : ''}`}
              onClick={() => nav(key)}
            >{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
