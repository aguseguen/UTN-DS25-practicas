import logo from '../../public/logo.png';

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Logo El Rincón Lector" className="logo-principal" />
    </header>
  );
}

export default Header;