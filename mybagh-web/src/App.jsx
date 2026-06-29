import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BreakfastMenu from './pages/BreakfastMenu';
import MainMenu from './pages/MainMenu';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="site-wrapper">
      <AnnouncementBar />
      <Navbar page={page} setPage={setPage} />
      <main className="site-content">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'breakfast' && <BreakfastMenu />}
        {page === 'menu' && <MainMenu />}
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} MyBagh. All rights reserved.</p>
        <p>667 Stockport Road, Manchester, M12 4QE &nbsp;|&nbsp; 07587 049396</p>
      </footer>
    </div>
  );
}

export default App;
