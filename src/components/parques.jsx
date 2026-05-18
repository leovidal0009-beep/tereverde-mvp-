import React from 'react';
import '../App.css';
import imgSerraOrgaos from '../assets/parques/serra-orgaos.jpg';
import imgTresPicos from '../assets/parques/tres-picos.jpg';
import imgMontanhas from '../assets/parques/montanhas-tere.jpg';
import imgtartaruga from '../assets/parques/tartaruga.jpg';


function Parques() {
  const listaDeParques = [
    { id: 1, nome: 'Parque Nacional da Serra dos Órgãos', horario: '?', imagem: imgSerraOrgaos },
    { id: 2, nome: 'Parque Estadual dos Três Picos', horario: '?', imagem: imgTresPicos },
    { id: 3, nome: 'PARNASO', horario: '?', imagem: imgMontanhas },
    { id: 4, nome: 'Parque Natural Municipal Montanhas de Teresópolis', horario: '?', imagem: imgtartaruga },
    
    
  ];

  return (
    <div className="pagina-parques">
      <h2>Nossos Parques e Trilhas:</h2>
      <div className="parks-container">
        {listaDeParques.map((parque) => (
          <div key={parque.id} className="park-card">
            <img src={parque.imagem} alt={parque.nome} />
            <div className="park-info">
              <h3>{parque.nome}</h3>
              <p>Horário: <strong>{parque.horario}</strong></p>
              <button className="btn-details">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parques;