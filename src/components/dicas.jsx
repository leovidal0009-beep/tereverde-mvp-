import React from 'react';
import '../App.css';

const dicas = [
  {
    id: 1,
    icone: '🥾',
    titulo: 'Equipamento adequado',
    texto: 'Use calçado de trilha com boa aderência. Evite sandálias ou sapatênis — o terreno pode ser irregular e escorregadio, especialmente após chuvas.',
  },
  {
    id: 2,
    icone: '💧',
    titulo: 'Hidratação é essencial',
    texto: 'Leve ao menos 1,5 L de água por pessoa para trilhas curtas. Para trilhas longas (mais de 6 km), planeje 2–3 L. A altitude aumenta a necessidade de hidratação.',
  },
  {
    id: 3,
    icone: '🌦️',
    titulo: 'Verifique o clima antes',
    texto: 'A serra tem clima instável. Acompanhe a previsão do tempo e evite trilhas em dias de tempestade. Névoa densa pode dificultar a orientação.',
  },
  {
    id: 4,
    icone: '🗺️',
    titulo: 'Nunca vá sem mapa',
    texto: 'Baixe o mapa offline da trilha antes de sair. As trilhas da Serra dos Órgãos podem ser longas e com poucas sinalizações em alguns trechos.',
  },
  {
    id: 5,
    icone: '🧴',
    titulo: 'Proteção solar e repelente',
    texto: 'Use protetor solar FPS 50+ e reaaplique a cada 2 horas. Repelente de insetos é fundamental, especialmente em trilhas próximas a cursos d\'água.',
  },
  {
    id: 6,
    icone: '♻️',
    titulo: 'Deixe apenas pegadas',
    texto: 'Não deixe lixo nas trilhas. Leve um saco para recolher resíduos. Respeite a fauna e flora: não alimente animais nem retire plantas ou rochas.',
  },
  {
    id: 7,
    icone: '👥',
    titulo: 'Avise alguém sobre sua rota',
    texto: 'Sempre informe a um familiar ou amigo o nome da trilha, o horário de saída e o horário previsto de retorno antes de iniciar qualquer caminhada.',
  },
  {
    id: 8,
    icone: '🧰',
    titulo: 'Kit de primeiros socorros',
    texto: 'Leve um kit básico com esparadrapo, band-aids, soro fisiológico, antisséptico e analgésico. Em trilhas longas, inclua atadura e cobertor térmico.',
  },
];

function Dicas() {
  return (
    <div className="pagina-dicas">
      <h2 className="page-titulo">Dicas de Segurança</h2>
      <p className="page-subtitulo" style={{ marginBottom: '2rem' }}>
        Prepare-se bem e aproveite a Serra com segurança e responsabilidade
      </p>

      <div className="dicas-grid">
        {dicas.map(dica => (
          <div className="dica-card" key={dica.id}>
            <div className="dica-icone">{dica.icone}</div>
            <h3 className="dica-titulo">{dica.titulo}</h3>
            <p className="dica-texto">{dica.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dicas;