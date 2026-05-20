import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';
import imgSerraOrgaos from '../assets/parques/serra-orgaos.jpg';
import imgTresPicos   from '../assets/parques/tres-picos.jpg';
import imgMontanhas   from '../assets/parques/montanhas-tere.jpg';
import imgTartaruga   from '../assets/parques/tartaruga.jpg';

const listaDeParques = [
  {
    id: 1,
    nome: 'Parque Nacional da Serra dos Órgãos',
    horario: 'Ter–Dom, 8h–17h',
    imagem: imgSerraOrgaos,
    descricao: 'O PARNASO é uma das unidades de conservação mais antigas do Brasil, criado em 1939. Abriga montanhas icônicas como o Dedo de Deus e a Pedra do Sino, além de trilhas para todos os níveis de dificuldade.',
    ingresso: 'R$ 22,00 (adulto) | R$ 11,00 (meia)',
    contato: '(21) 2641-1070',
    endereco: 'Rua Marechal Deodoro, 2336 – Alto',
    trilhas: ['Trilha da Pedra do Sino', 'Trilha do Dedo de Deus', 'Caminho do Colono'],
  },
  {
    id: 2,
    nome: 'Parque Estadual dos Três Picos',
    horario: 'Seg–Dom, 8h–17h',
    imagem: imgTresPicos,
    descricao: 'O maior parque estadual do Rio de Janeiro, com mais de 46 mil hectares de Mata Atlântica preservada. Oferece trilhas desafiadoras e vistas panorâmicas da Serra.',
    ingresso: 'Gratuito',
    contato: '(21) 2641-3234',
    endereco: 'Estrada Teresópolis-Friburgo, km 12',
    trilhas: ['Trilha dos Três Picos', 'Trilha do Pico do Caledônia'],
  },
  
   
  ,
  {
    id: 4,
    nome: 'Parque Natural Municipal Montanhas de Teresópolis',
    horario: 'Seg–Dom, 8h–17h',
    imagem: imgTartaruga,
    descricao: 'Parque municipal com fácil acesso e trilhas para todos os públicos. Destaque para a Pedra da Tartaruga e diversas cachoeiras de pequeno porte.',
    ingresso: 'Gratuito',
    contato: '(21) 2742-3801',
    endereco: 'Estrada Edmundo Bittencourt, 5901',
    trilhas: ['Trilha da Pedra da Tartaruga', 'Circuito das Cachoeiras'],
  },
];

/* ── Detalhe de um parque específico ── */
function DetalheParque({ parque }) {
  return (
    <div className="parque-detalhe">
      <Link to="/parques" className="btn-voltar">← Voltar para Parques</Link>
      <div className="parque-detalhe-hero">
        <img src={parque.imagem} alt={parque.nome} />
        <div className="parque-detalhe-overlay">
          <h1>{parque.nome}</h1>
        </div>
      </div>
      <div className="parque-detalhe-corpo">
        <p className="parque-detalhe-desc">{parque.descricao}</p>
        <div className="parque-detalhe-grid">
          <div className="parque-info-item">⏰ <strong>Horário:</strong> {parque.horario}</div>
          <div className="parque-info-item">🎟️ <strong>Ingresso:</strong> {parque.ingresso}</div>
          <div className="parque-info-item">📞 <strong>Contato:</strong> {parque.contato}</div>
          <div className="parque-info-item">📍 <strong>Endereço:</strong> {parque.endereco}</div>
        </div>
        <div className="parque-trilhas">
          <h3>Trilhas neste parque:</h3>
          <ul>
            {parque.trilhas.map((t, i) => (
              <li key={i}>
                <Link to="/trilhas">🥾 {t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Lista de parques ── */
function Parques() {
  const { id } = useParams();

  if (id) {
    const parque = listaDeParques.find(p => p.id === Number(id));
    if (parque) return <DetalheParque parque={parque} />;
  }

  return (
    <div className="pagina-parques">
      <h2 className="page-titulo">Nossos Parques</h2>
      <p className="page-subtitulo">Conheça as áreas naturais de Teresópolis e região</p>
      <div className="parks-container">
        {listaDeParques.map((parque) => (
          <div key={parque.id} className="park-card">
            <img src={parque.imagem} alt={parque.nome} />
            <div className="park-info">
              <h3>{parque.nome}</h3>
              <p>⏰ {parque.horario}</p>
              <Link to={`/parques/${parque.id}`} className="btn-details">Ver Detalhes →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parques;
