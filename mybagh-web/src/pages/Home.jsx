import './Home.css';

export default function Home({ setPage }) {
  return (
    <div className="home">
      <div className="home__hero">
        <img src="src/images/logo.jpg" alt="MyBagh" className="home__logo" />
        <h1 className="home__title">MyBagh</h1>
        <p className="home__subtitle">Cafe &amp; Restaurant</p>
        <p className="home__tagline">Authentic Pakistani Flavours · Manchester</p>
        <div className="home__cta-row">
          <button className="btn-gold" onClick={() => setPage('breakfast')}>Breakfast Menu</button>
          <button className="btn-gold" onClick={() => setPage('menu')}>Restaurant Menu</button>
        </div>
      </div>

      <div className="home__info-grid">
        <div className="info-card">
          <div className="info-card__icon">🕐</div>
          <h3>Breakfast</h3>
          <p>Served until 3PM every day</p>
        </div>
        <div className="info-card">
          <div className="info-card__icon">🍽️</div>
          <h3>Lunch &amp; Dinner</h3>
          <p>Starters, Mains &amp; Street Food from 3PM</p>
        </div>
        <div className="info-card">
          <div className="info-card__icon">🎉</div>
          <h3>Events</h3>
          <p>Birthdays · Family Gatherings · Corporate Events · Mehndi Nights</p>
        </div>
        <div className="info-card">
          <div className="info-card__icon">📍</div>
          <h3>Find Us</h3>
          <p>667 Stockport Road<br />Manchester, M12 4QE</p>
        </div>
      </div>

      <div className="home__contact">
        <a href="tel:07587049396" className="btn-outline">📞 07587 049396</a>
        <a href="https://mybagh.co.uk" target="_blank" rel="noreferrer" className="btn-outline">🌐 mybagh.co.uk</a>
        <a href="https://tiktok.com/@mybagh7" target="_blank" rel="noreferrer" className="btn-outline">🎵 @MYBAGH7</a>
      </div>
    </div>
  );
}
