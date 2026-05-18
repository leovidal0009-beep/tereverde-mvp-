import React, { useState, useEffect } from 'react';
import '../App.css';

// Mapeia o weathercode para ícone + descrição
function getDescricao(code) {
  if (code <= 1)  return { icone: '☀️', texto: 'Céu limpo' };
  if (code <= 3)  return { icone: '⛅', texto: 'Algumas Nuvens' };
  if (code <= 48) return { icone: '🌫️', texto: 'Neblina' };
  if (code <= 67) return { icone: '🌧️', texto: 'Chuva' };
  return              { icone: '⚠️', texto: 'Condições adversas' };
}

function Clima() {
  const [clima, setClima] = useState(null);
  const [erro, setErro]   = useState(false);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=-22.4122&longitude=-42.9733' +
      '&current_weather=true' +
      '&daily=temperature_2m_max,temperature_2m_min' +
      '&timezone=America%2FSao_Paulo'
    )
      .then(res => res.json())
      .then(data => setClima(data))
      .catch(() => setErro(true));
  }, []);

  if (erro)   return null; // silencioso se a API falhar
  if (!clima) return <div className="clima-loading">🌡️ …</div>;

  const { icone, texto } = getDescricao(clima.current_weather.weathercode);
  const tMax = Math.round(clima.daily?.temperature_2m_max?.[0] ?? clima.current_weather.temperature);
  const tMin = Math.round(clima.daily?.temperature_2m_min?.[0] ?? clima.current_weather.temperature);

  return (
    <div className="clima-widget">
      <span className="clima-icone">{icone}</span>
      <div className="clima-info">
        <span className="clima-cidade">Teresópolis</span>
        <span className="clima-desc">{texto}</span>
        <span className="clima-temp">
          <strong>{tMax}° Máx.</strong>
          <span className="clima-min">{tMin}° Mín.</span>
        </span>
      </div>
    </div>
  );
}

export default Clima;
