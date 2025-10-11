// En tu archivo App.tsx
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <main className="main-content">
        {/* Aquí es donde se renderizan tus páginas, como HomePage */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;