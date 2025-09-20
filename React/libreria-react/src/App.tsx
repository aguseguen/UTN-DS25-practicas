// En tu archivo App.tsx
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      <main className="main-content">
        {/* Aquí es donde se renderizan tus páginas, como HomePage */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;