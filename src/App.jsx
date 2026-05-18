import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import LogoMontanha from './logo-montanhismo.png';
import Parques       from './components/parques.jsx';
import Eventos       from './components/eventos.jsx';
import Guias         from './components/guias.jsx';
import Clima         from './components/clima.jsx';
import Trilhas       from './components/trilhas.jsx';
import Dicas         from './components/dicas.jsx';

// ── Importa imagens dos parques para o destaque da Home ──
import imgSerraOrgaos from './assets/parques/serra-orgaos.jpg';
import imgTresPicos   from './assets/parques/tres-picos.jpg';
import imgMontanhas   from './assets/parques/montanhas-tere.jpg';

/* ════════ HOME ════════ */
function Home() {
  const parquesDestaque = [
    { id: 1, nome: 'Parque Nacional da Serra dos Órgãos', img: imgSerraOrgaos, link: '/parques' },
    { id: 2, nome: 'Parque Estadual dos Três Picos',       img: imgTresPicos,   link: '/parques' },
    { id: 3, nome: 'Parque Natural Municipal de Teresópolis', img: imgMontanhas, link: '/parques' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore as Trilhas da Serra</h1>
          <p>Descubra as belezas da região serrana do Rio.</p>
          <Link to="/trilhas" className="btn-hero">Saiba Mais</Link>
        </div>
      </section>

      {/* ALERTAS */}
      <div className="alertas">
        <div className="alerta-item orange">
          <span className="alerta-left">⚠️ Alerta: Chuva Forte na Região</span>
          <span className="alerta-right">›</span>
        </div>
        <div className="alerta-item red">
          <span className="alerta-left">🚫 Trilha Fechada: Pedra do Sino</span>
          <span className="alerta-right">›</span>
        </div>
      </div>

      {/* PARQUES EM DESTAQUE */}
      <section className="destaque-section">
        <h2>Parques em Destaque</h2>
        <div className="destaque-grid">
          {parquesDestaque.map((p) => (
            <div className="destaque-card" key={p.id}>
              <img src={p.img} alt={p.nome} />
              <div className="destaque-card-info">
                <h3>{p.nome}</h3>
                <Link to={p.link} className="btn-ver-mais">Ver Mais ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER DA HOME */}
      <footer className="footer">
        <Link to="/dicas" className="footer-item">
          <span className="footer-icon">💡</span> Saiba mais
        </Link>
        <Link to="/parques" className="footer-item">
          <span className="footer-icon">🗺️</span> Acesse o mapa
        </Link>
        <Link to="/trilhas" className="footer-item">
          <span className="footer-icon">🥾</span> Calce-se e vá
        </Link>
      </footer>
    </>
  );
}

/* ════════ SOBRE ════════ */
function Sobre() {
  return (
    <div className="pagina-sobre">
      <h1 className="sobre-titulo">Sobre o TerêVerde</h1>
      <p className="sobre-texto">
        O <strong>TerêVerde</strong> é uma plataforma digital dedicada a conectar visitantes, moradores
        e apaixonados pela natureza com os melhores parques, trilhas e experiências da região serrana
        de Teresópolis, no Rio de Janeiro.
      </p>
      <div className="sobre-destaque">
        "Explore com segurança, preserve com consciência e descubra o melhor da Serra dos Órgãos."
      </div>
      <p className="sobre-texto">
        Nossa missão é facilitar o acesso à informação sobre parques naturais, condições de trilhas,
        eventos culturais e guias locais certificados — tudo em um só lugar.
      </p>
      <p className="sobre-texto">
        Desenvolvido como projeto MVP por estudantes comprometidos com o turismo sustentável e a
        preservação da Mata Atlântica.
      </p>
    </div>
  );
}

/* ════════ LOGIN ════════ */
function Login() {
  return (
    <div className="pagina-auth">
      <div className="auth-box">
        <h2>Entrar</h2>
        <p>Acesse sua conta TerêVerde</p>
        <p className="auth-aviso">Tela de login — configure conforme desejar.</p>
      </div>
    </div>
  );
}

/* ════════ CADASTRO ════════ */
function Cadastro() {
  return (
    <div className="pagina-auth">
      <div className="auth-box">
        <h2>Criar conta</h2>
        <p>Junte-se à comunidade TerêVerde</p>
        <p className="auth-aviso">Tela de cadastro — configure conforme desejar.</p>
      </div>
    </div>
  );
}

/* ════════ APP PRINCIPAL ════════ */
function App() {
  return (
    <Router>
      <div className="App">

        {/* ── NAVBAR ── */}
        <nav className="navbar">
          {/* Logo */}
          <Link to="/">
            <img src={LogoMontanha} className="logo-app" alt="TerêVerde" />
          </Link>

          {/* Links centrais */}
          <div className="navbar-links">
            <NavLink to="/"        end  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Início</NavLink>
            <NavLink to="/parques"      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Parques</NavLink>
            <NavLink to="/trilhas"      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Trilhas</NavLink>
            <NavLink to="/eventos"      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Eventos</NavLink>
            <NavLink to="/dicas"        className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Dicas</NavLink>
          </div>

          {/* Lado direito: clima + busca + login */}
          <div className="navbar-right">
            <Clima />
            <button className="btn-search" title="Buscar">🔍</button>
            <Link to="/login"    className="btn-login">Login</Link>
            <Link to="/cadastro" className="btn-cadastro">Cadastro</Link>
          </div>
        </nav>

        {/* ── ROTAS ── */}
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/parques"  element={<Parques />}  />
          <Route path="/trilhas"  element={<Trilhas />}  />
          <Route path="/eventos"  element={<Eventos />}  />
          <Route path="/dicas"    element={<Dicas />}    />
          <Route path="/guias"    element={<Guias />}    />
          <Route path="/sobre"    element={<Sobre />}    />
          <Route path="/login"    element={<Login />}    />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;