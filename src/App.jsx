import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import LogoMontanha from './logo-tereverde.png';
import Parques       from './components/parques.jsx';
import Eventos       from './components/eventos.jsx';
import Guias         from './components/guias.jsx';
import Clima         from './components/clima.jsx';
import Trilhas       from './components/trilhas.jsx';
import Dicas         from './components/dicas.jsx';

import imgSerraOrgaos from './assets/parques/serra-orgaos.jpg';
import imgTresPicos   from './assets/parques/tres-picos.jpg';
import imgMontanhas   from './assets/parques/montanhas-tere.jpg';

/* ════════ HOME ════════ */
function Home() {
  const parquesDestaque = [
    { id: 1, nome: 'Parque Nacional da Serra dos Órgãos', img: imgSerraOrgaos },
    { id: 2, nome: 'Parque Estadual dos Três Picos',       img: imgTresPicos   },
    { id: 3, nome: 'Parque Natural Municipal de Teresópolis', img: imgMontanhas },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore as Trilhas da Serra</h1>
          <p>Descubra as belezas da região serrana do Rio.</p>
          <Link to="/parques" className="btn-hero">Saiba Mais</Link>
        </div>
      </section>

      {/* ALERTAS — apenas visuais, clique abre previsão do tempo */}
      <div className="alertas">
        <a
          href="https://weather.com/pt-BR/tempo/hoje/l/Teres%C3%B3polis+RJ+BRXX2353:1:BR"
          target="_blank" rel="noopener noreferrer"
          className="alerta-item orange"
        >
          <span className="alerta-left">⚠️ Alerta: Chuva Forte na Região — clique para ver previsão</span>
          <span className="alerta-right">›</span>
        </a>
        <div className="alerta-item red" style={{ cursor: 'default' }}>
          <span className="alerta-left">🚫 Trilha Fechada: Pedra do Sino</span>
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
                <Link to={`/parques/${p.id}`} className="btn-ver-mais">Ver Mais ›</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Link to="/dicas" className="footer-item">
          <span className="footer-icon">💡</span> Confira nossas dicas
        </Link>
        <Link to="/parques" className="footer-item">
          <span className="footer-icon">🗺️</span> Acesse o mapa
        </Link>
        <Link to="/trilhas" className="footer-item">
          <span className="footer-icon">🥾</span> Explore as trilhas
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
        O <strong>TerêVerde</strong> é uma plataforma digital dedicada a conectar visitantes,
        moradores e apaixonados pela natureza com os melhores parques, trilhas e experiências
        da região serrana de Teresópolis, no Rio de Janeiro.
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
  const [email, setEmail]     = useState('');
  const [senha, setSenha]     = useState('');
  const navigate              = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Login com: ${email}\n(Integre com seu backend aqui)`);
  }

  return (
    <div className="pagina-auth">
      <div className="auth-box">
        <div className="auth-logo">🌿</div>
        <h2>Entrar</h2>
        <p>Acesse sua conta TerêVerde</p>
        <div className="auth-form">
          <div className="auth-field">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-field">
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <button className="btn-auth" onClick={handleSubmit}>Entrar</button>
          <p className="auth-link">
            Não tem conta? <Link to="/cadastro">Criar conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ════════ CADASTRO ════════ */
function Cadastro() {
  const [nome, setNome]       = useState('');
  const [email, setEmail]     = useState('');
  const [senha, setSenha]     = useState('');
  const [confirma, setConfirma] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (senha !== confirma) { alert('As senhas não coincidem!'); return; }
    alert(`Cadastro de: ${nome} (${email})\n(Integre com seu backend aqui)`);
  }

  return (
    <div className="pagina-auth">
      <div className="auth-box">
        <div className="auth-logo">🌿</div>
        <h2>Criar conta</h2>
        <p>Junte-se à comunidade TerêVerde</p>
        <div className="auth-form">
          <div className="auth-field">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="auth-field">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="auth-field">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div className="auth-field">
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Repita a senha"
              value={confirma}
              onChange={e => setConfirma(e.target.value)}
            />
          </div>
          <button className="btn-auth" onClick={handleSubmit}>Criar conta</button>
          <p className="auth-link">
            Já tem conta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ════════ NAVBAR com busca ════════ */
function Navbar() {
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [termoBusca, setTermoBusca]   = useState('');
  const navigate                       = useNavigate();

  function handleBusca(e) {
    e.preventDefault();
    if (termoBusca.trim()) {
      navigate(`/trilhas?busca=${encodeURIComponent(termoBusca.trim())}`);
      setBuscaAberta(false);
      setTermoBusca('');
    }
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={LogoMontanha} className="logo-app" alt="TerêVerde" />
      </Link>

      <div className="navbar-links">
        <NavLink to="/"       end  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Início</NavLink>
        <NavLink to="/parques"     className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Parques</NavLink>
        <NavLink to="/trilhas"     className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Trilhas</NavLink>
        <NavLink to="/eventos"     className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Eventos</NavLink>
        <NavLink to="/dicas"       className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Dicas</NavLink>
      </div>

      <div className="navbar-right">
        <Clima />

        {/* Lupa com campo de busca expansível */}
        {buscaAberta ? (
          <form className="busca-form" onSubmit={handleBusca}>
            <input
              autoFocus
              className="busca-input"
              type="text"
              placeholder="Buscar trilha..."
              value={termoBusca}
              onChange={e => setTermoBusca(e.target.value)}
            />
            <button type="submit" className="btn-search">🔍</button>
            <button type="button" className="btn-search" onClick={() => setBuscaAberta(false)}>✕</button>
          </form>
        ) : (
          <button className="btn-search" title="Buscar trilha" onClick={() => setBuscaAberta(true)}>🔍</button>
        )}

        <Link to="/login"    className="btn-login">Login</Link>
        <Link to="/cadastro" className="btn-cadastro">Cadastro</Link>
      </div>
    </nav>
  );
}

/* ════════ APP PRINCIPAL ════════ */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />}     />
          <Route path="/parques"    element={<Parques />}  />
          <Route path="/parques/:id" element={<Parques />} />
          <Route path="/trilhas"    element={<Trilhas />}  />
          <Route path="/eventos"    element={<Eventos />}  />
          <Route path="/dicas"      element={<Dicas />}    />
          <Route path="/guias"      element={<Guias />}    />
          <Route path="/sobre"      element={<Sobre />}    />
          <Route path="/login"      element={<Login />}    />
          <Route path="/cadastro"   element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
