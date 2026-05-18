import React, { useState } from 'react';
import '../App.css';

const guias = [
  {
    id: 1,
    nome: 'Carlos Monteiro',
    especialidade: 'Trilhas de Alta Montanha',
    experiencia: '12 anos',
    regiao: 'Serra dos Órgãos',
    descricao:
      'Especialista em trilhas de alta dificuldade na Serra dos Órgãos. Conduz grupos para a Pedra do Sino, Dedo de Deus e travessias de longa distância com total segurança.',
    contato: '(21) 99999-0001',
    icone: '🧗',
    nivel: 'Alta Montanha',
    nivelColor: '#b91c1c',
  },
  {
    id: 2,
    nome: 'Ana Paula Silva',
    especialidade: 'Ecoturismo & Cachoeiras',
    experiencia: '8 anos',
    regiao: 'Vale do Paquequer',
    descricao:
      'Guia certificada em ecoturismo, especializada em roteiros de cachoeiras e observação da fauna. Ideal para famílias e grupos iniciantes que querem explorar a natureza com segurança.',
    contato: '(21) 99999-0002',
    icone: '🌿',
    nivel: 'Iniciante / Família',
    nivelColor: '#15803d',
  },
  {
    id: 3,
    nome: 'Roberto Alves',
    especialidade: 'Escalada & Rappel',
    experiencia: '15 anos',
    regiao: 'Parque Nacional da Serra dos Órgãos',
    descricao:
      'Instrutor de escalada com certificação internacional. Realiza atividades de rappel, escalada esportiva e cursos de iniciação para todos os níveis dentro do PARNASO.',
    contato: '(21) 99999-0003',
    icone: '🪨',
    nivel: 'Aventura',
    nivelColor: '#b45309',
  },
  {
    id: 4,
    nome: 'Fernanda Costa',
    especialidade: 'Birdwatching & Fauna',
    experiencia: '6 anos',
    regiao: 'Reserva do Imbuí',
    descricao:
      'Bióloga e guia especializada em observação de aves da Mata Atlântica. Conduz roteiros no Horto Municipal e reservas particulares, com foco em educação ambiental.',
    contato: '(21) 99999-0004',
    icone: '🦜',
    nivel: 'Contemplativo',
    nivelColor: '#0369a1',
  },
  {
    id: 5,
    nome: 'Diego Ferreira',
    especialidade: 'Mountain Bike & Trilhas Off-Road',
    experiencia: '10 anos',
    regiao: 'Alto da Serra',
    descricao:
      'Guia e mecânico de bikes, especialista em trilhas off-road na região serrana. Organiza roteiros de 1 a 3 dias com suporte logístico completo para ciclistas de todos os níveis.',
    contato: '(21) 99999-0005',
    icone: '🚵',
    nivel: 'Aventura',
    nivelColor: '#b45309',
  },
  {
    id: 6,
    nome: 'Luana Barbosa',
    especialidade: 'Turismo Cultural & Histórico',
    experiencia: '9 anos',
    regiao: 'Centro Histórico de Teresópolis',
    descricao:
      'Historiadora e guia de turismo cultural. Conduz visitas ao centro histórico, colônias de imigrantes e produtores rurais locais, resgatando a memória e identidade da cidade.',
    contato: '(21) 99999-0006',
    icone: '🏛️',
    nivel: 'Cultural',
    nivelColor: '#7c3aed',
  },
];

function Guias() {
  const [filtro, setFiltro] = useState('Todos');

  const niveis = ['Todos', 'Alta Montanha', 'Iniciante / Família', 'Aventura', 'Contemplativo', 'Cultural'];

  const guiasFiltrados =
    filtro === 'Todos' ? guias : guias.filter((g) => g.nivel === filtro);

  return (
    <div className="guias-pagina">
      <div className="guias-header">
        <h2>Guias de Teresópolis</h2>
        <p>Profissionais certificados para sua aventura na Serra</p>
      </div>

      {/* Filtro por nível */}
      <div className="guias-filtros">
        {niveis.map((nivel) => (
          <button
            key={nivel}
            className={`filtro-btn ${filtro === nivel ? 'filtro-ativo' : ''}`}
            onClick={() => setFiltro(nivel)}
          >
            {nivel}
          </button>
        ))}
      </div>

      <div className="guias-grid">
        {guiasFiltrados.map((guia) => (
          <div className="guia-card" key={guia.id}>
            {/* Avatar + nome */}
            <div className="guia-card-topo">
              <div className="guia-avatar">{guia.icone}</div>
              <div className="guia-identidade">
                <h3 className="guia-nome">{guia.nome}</h3>
                <span
                  className="guia-nivel-badge"
                  style={{ backgroundColor: guia.nivelColor }}
                >
                  {guia.nivel}
                </span>
              </div>
            </div>

            {/* Detalhes */}
            <div className="guia-card-corpo">
              <p className="guia-especialidade">🎯 {guia.especialidade}</p>
              <div className="guia-meta">
                <span className="guia-meta-item">📍 {guia.regiao}</span>
                <span className="guia-meta-item">⏱️ {guia.experiencia} de experiência</span>
              </div>
              <p className="guia-descricao">{guia.descricao}</p>
            </div>

            {/* Contato */}
            <div className="guia-card-rodape">
              <a
                href={`tel:${guia.contato.replace(/\D/g, '')}`}
                className="btn-contato-guia"
              >
                📞 {guia.contato}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guias;