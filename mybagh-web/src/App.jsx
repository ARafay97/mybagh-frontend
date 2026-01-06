import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <main className="coming-soon">
      <header className="coming-soon__header">
        <img
          src="src/images/logo.jpg"
          alt="Mybagh logo"
          className="logo"
        />
      </header>

      <section className="coming-soon__content">
        <h1 className="coming-soon__title">Mybagh</h1>
        <p className="coming-soon__subtitle">Coming Soon</p>

        {/* optional: keep/remove once you send CSS */}
        <div className="coming-soon__line" />

        <p className="coming-soon__text">
          We’re building something special. Check back soon.
        </p>
      </section>

      <footer className="coming-soon__footer">
        <small>© {new Date().getFullYear()} Mybagh. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
