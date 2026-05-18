import React, { useState } from 'react';
import '../App.css';

const trilhas = [
  {
    id: 1,
    nome: 'Trilha da Pedra do Sino',
    parque: 'PARNASO',
    distancia: '14 km',
    duracao: '8–10h',
    dificuldade: 'dificil',
    descricao: 'Uma das trilhas mais icônicas do Brasil. Começa em Teresópolis e termina no ponto mais alto do PARNASO (2.263 m). Exige preparo físico e agendamento obrigatório.',
    status: 'fechada',
  },
  {
    id: 2,
    nome: 'Trilha do Dedo de Deus',
    parque: 'PARNASO',
    distancia: '6 km',
    duracao: '4–5h',
    dificuldade: 'moderado',
    descricao: 'Vista para o pico mais famoso da Serra dos Órgãos. Rota moderada com pontos de observação panorâmicos e rica em vegetação de Mata Atlântica.',
    status: 'aberta',
  },
  {
    id: 3,
    nome: 'Circuito das Cachoeiras',
    parque: 'Parque Natural Municipal',
    distancia: '4 km',
    duracao: '2–3h',
    dificuldade: 'facil',
    descricao: 'Trilha leve e familiar que passa por três cachoeiras. Ideal para iniciantes e crianças. Inclui área de piquenique e mirante.',
    status: 'aberta',
  },
  {
    id: 4,
    nome: 'Trilha da Pedra da Tartaruga',
    parque: 'Parque Natural Municipal',
    distancia: '3 km',
    duracao: '1.5–2h',
    dificuldade: 'facil',
    descricao: 'Trilha curta com formação rochosa em formato de tartaruga ao final. Ótima para iniciantes e famílias com crianças.',
    status: 'aberta',
  },
  {
    id: 5,
    nome: 'Trilha dos Três Picos',
    parque: 'Parque Estadual dos Três Picos',
    distancia: '18 km',
    duracao: '10–12h',
    dificuldade: 'dificil',
    descricao: 'Travessia desafiadora pelos três picos principais do parque. Requer experiência, equipamento adequado e guia credenciado.',
    status: 'aberta',
  },
  {
    id: 6,
    nome: 'Caminho do Colono',
    parque: 'Serra dos Órgãos',
    distancia: '8 km',
    duracao: '4–5h',
    dificuldade: 'moderado',
    descricao: 'Rota histórica que percorre antigas trilhas dos colonos imigrantes. Passa por ruínas e áreas de Mata Atlântica preservada.',
    status: 'aberta',
  },
];

const difLabel = { facil: 'Fácil', moderado: 'Moderado', dificil: 'Difícil' };

function Trilhas() {
  const [filtro, setFiltro] = useState('todas');

  const lista = filtro === 'todas'
    ? trilhas
    : trilhas.filter(t => t.dificuldade === filtro);

  return (
    <div className="pagina-trilhas">
      <h2 className="page-titulo">Trilhas de Teresópolis</h2>
      <p className="page-subtitulo">Escolha sua aventura e explore a Serra dos Órgãos</p>

      {/* Filtros */}
      <div className="guias-filtros" style={{ marginBottom: '2rem' }}>
        {[['todas','Todas'], ['facil','Fácil'], ['moderado','Moderado'], ['dificil','Difícil']].map(([v, l]) => (
          <button
            key={v}
            className={`filtro-btn ${filtro === v ? 'filtro-ativo' : ''}`}
            onClick={() => setFiltro(v)}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="trilhas-grid">
        {lista.map(trilha => (
          <div className="trilha-card" key={trilha.id}>
            <div className="trilha-header">
              <span className="trilha-nome">{trilha.nome}</span>
              <span className={`trilha-dif ${trilha.dificuldade}`}>
                {difLabel[trilha.dificuldade]}
              </span>
            </div>
            <div className="trilha-meta">
              <span>📍 {trilha.parque}</span>
              <span>📏 {trilha.distancia}</span>
              <span>⏱️ {trilha.duracao}</span>
              <span style={{ color: trilha.status === 'aberta' ? '#27ae60' : '#c0392b', fontWeight: 700 }}>
                {trilha.status === 'aberta' ? '✅ Aberta' : '🚫 Fechada'}
              </span>
            </div>
            <p className="trilha-desc">{trilha.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trilhas;