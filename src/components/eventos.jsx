import React from 'react';
import '../App.css';

const eventos = [
  {
    id: 1,
    titulo: 'Festival Sesc de Inverno 2025',
    data: 'Em andamento – Julho 2025',
    local: 'Sesc Teresópolis',
    descricao:
      'O maior festival de cultura e artes do interior fluminense chega a Teresópolis com shows, teatro, dança e muito mais para toda a família.',
    categoria: 'Cultura',
    categoriaColor: '#4a7c59',
    icone: '🎭',
    link: 'https://festivalsescdeinverno.com.br/programacoes/?localidade=TERES%C3%93POLIS',
  },
  {
    id: 2,
    titulo: 'FEPORT 2025',
    data: '18 a 21 de Setembro de 2025',
    local: 'Parque Municipal de Exposições – Albuquerque',
    descricao:
      'A Feira do Produtor Rural de Teresópolis está de volta! Shows de Samuel Miranda, Yasmin Santos, João Gabriel e Leonardo. Entrada: 1 kg de alimento não perecível.',
    categoria: 'Agro & Shows',
    categoriaColor: '#8B6914',
    icone: '🌾',
    link: 'https://www.teresopolis.rj.gov.br/feport-2025-a-maior-feira-agropecuaria-de-teresopolis-retorna-com-shows-nacionais-valorizacao-da-cultura-local-e-do-produtor-rural-local/',
  },
  {
    id: 3,
    titulo: 'Serveja Teresópolis 2025',
    data: '18–20 e 25–27 de Julho de 2025',
    local: 'Teresópolis Golf Club',
    descricao:
      'O maior arraiá cervejeiro da serra! Cervejas artesanais, gastronomia de rua, shows ao vivo e espaço kids. Entrada franca.',
    categoria: 'Gastronomia',
    categoriaColor: '#c0622a',
    icone: '🍺',
    link: 'https://teretotal.com.br/de-14-a-16-07-serveja-teresopolis-festival-da-cerveja/',
  },
  {
    id: 4,
    titulo: '4º Festival Jazz & Blues',
    data: '28 de Abril – 20h',
    local: 'Teatro Municipal – 2º piso da Prefeitura',
    descricao:
      'Uma noite reunindo artistas locais e convidados com influências do jazz e blues afro-americano. Realização da Gama Produções com apoio da Prefeitura. Entrada franca.',
    categoria: 'Música',
    categoriaColor: '#1a3a6b',
    icone: '🎷',
    link: 'https://www.sympla.com.br/evento/festival-jazz-e-blues-4-edicao/1928404',
  },
];

function Eventos() {
  return (
    <div className="eventos-pagina">
      <div className="eventos-header">
        <h2>Eventos em Teresópolis</h2>
        <p>Fique por dentro da agenda cultural e de lazer da cidade</p>
      </div>

      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div className="evento-card" key={evento.id}>
            <div className="evento-card-topo">
              <span className="evento-icone">{evento.icone}</span>
              <span
                className="evento-categoria"
                style={{ backgroundColor: evento.categoriaColor }}
              >
                {evento.categoria}
              </span>
            </div>

            <div className="evento-card-corpo">
              <h3 className="evento-titulo">{evento.titulo}</h3>
              <div className="evento-meta">
                <span className="evento-meta-item">
                  <span className="evento-meta-icon">📅</span> {evento.data}
                </span>
                <span className="evento-meta-item">
                  <span className="evento-meta-icon">📍</span> {evento.local}
                </span>
              </div>
              <p className="evento-descricao">{evento.descricao}</p>
            </div>

            <div className="evento-card-rodape">
              <a
                href={evento.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-saiba-mais"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;