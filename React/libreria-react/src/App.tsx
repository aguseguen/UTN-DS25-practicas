import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'; 
import '../src/App.css'

function App() {
  return (
    <>
      <Header />
      <Nav /> 

      <main className="container">
        <Outlet /> 
      </main>
      
      <Footer />
    </>
  );
}

export default App;