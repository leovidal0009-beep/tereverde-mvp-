# 🌿 TerêVerde MVP

> Plataforma web para descobrir parques, trilhas, eventos e guias de Teresópolis — RJ.

---

## 👥 Integrantes

| Nome | Função 
|------|--------
| Leonardo Vidal 
| Caio Nascimento 
| Samantha Nunes 
| Matheus Almeida 
| Bruna

---

## 📌 Situação-Problema

Teresópolis é um dos principais destinos de ecoturismo do estado do Rio de Janeiro, com parques nacionais, trilhas de diferentes níveis e rica biodiversidade. Porém, as informações sobre os parques, trilhas e eventos estão espalhadas em diferentes fontes, dificultando o planejamento dos visitantes.

O **TerêVerde** surge para centralizar essas informações em uma plataforma única, acessível e atualizada.

---

## 💡 Descrição do Projeto

O TerêVerde é uma **plataforma web responsiva** que centraliza informações sobre os principais parques de Teresópolis. O usuário pode:

- Consultar parques com detalhes completos (horários, ingressos, endereço)
- Explorar trilhas filtradas por nível de dificuldade, com **mapa integrado**
- Visualizar eventos culturais e de lazer da cidade
- Consultar guias locais certificados por especialidade
- Ver **clima em tempo real** de Teresópolis
- Receber alertas de condições adversas e trilhas fechadas

---

## 🚀 Funcionalidades do MVP

| Funcionalidade | Status |
|---|---|
| Página inicial com hero, alertas e parques em destaque | ✅ |
| Navegação entre páginas sem recarregamento (SPA) | ✅ |
| Alertas dinâmicos (chuva forte, trilha fechada) | ✅ |
| Lista de parques com página de detalhe individual | ✅ |
| Trilhas com filtro por dificuldade | ✅ |
| Mapa integrado por trilha (OpenStreetMap) | ✅ |
| Eventos com filtro por categoria | ✅ |
| Guias locais com filtro por especialidade | ✅ |
| Dicas de segurança para trilhas | ✅ |
| Clima em tempo real via API | ✅ |
| Login e Cadastro (estrutura pronta) | ✅ |
| Design responsivo (mobile/desktop) | ✅ |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **React 19** | Biblioteca principal para construção da interface |
| **Vite** | Bundler e servidor de desenvolvimento |
| **React Router DOM v7** | Navegação entre páginas (SPA) |
| **Open-Meteo API** | Dados climáticos em tempo real (gratuita, sem API key) |
| **OpenStreetMap** | Mapas integrados por trilha (gratuito, sem API key) |
| **CSS Puro** | Estilização com variáveis de cores e layout responsivo |
| **Git + GitHub** | Controle de versão |
| **Vercel** | Hospedagem e deploy automático |

---

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                  # Componente raiz, navbar e rotas
├── App.css                  # Todos os estilos do projeto
├── logo-tereverde.png       # Logo do projeto
├── assets/
│   └── parques/             # Imagens dos parques
└── components/
    ├── clima.jsx            # Widget de clima em tempo real
    ├── parques.jsx          # Lista e detalhe de parques
    ├── trilhas.jsx          # Trilhas com filtro e mapa
    ├── eventos.jsx          # Eventos com filtro por categoria
    ├── guias.jsx            # Guias com filtro por especialidade
    └── dicas.jsx            # Dicas de segurança
```

---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 20 ou superior
- [Git](https://git-scm.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leovidal0009-beep/tereverde-mvp-.git

# Entre na pasta do projeto
cd tereverde-mvp-/nome-do-projeto

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev
```


### Deploy (atualizar o site)

```bash
git add .
git commit -m "descrição das mudanças"
git push
```

O Vercel detecta o push e publica automaticamente em ~1 minuto.

---

## 🌐 Acesse o Site

🔗 [**[tereverde-mvp.vercel.app](https://tereverde-mvp.vercel.app)](https://tereverde-mvp-do82-ivjeu7lan-leovidal0009-beeps-projects.vercel.app/)**

---

## 🎯 Objetivos do Produto

- Centralizar informações dos parques de Teresópolis
- Melhorar a experiência e segurança dos visitantes
- Promover o turismo sustentável e a educação ambiental
- Apoiar guias e trabalhadores do turismo local

---

## 👥 Público-Alvo

- Turistas e visitantes de Teresópolis
- Praticantes de trilhas e montanhismo
- Moradores locais
- Guias turísticos certificados

---

## 🏞️ Parques Incluídos

- **Parque Nacional da Serra dos Órgãos (PARNASO)**
- **Parque Estadual dos Três Picos**
- **Parque Natural Municipal Montanhas de Teresópolis**

---

## ⚠️ Observações sobre o MVP

- O sistema de login está com estrutura completa, aguardando integração com backend
- O clima é obtido em tempo real via API pública gratuita (Open-Meteo)
- Os mapas são renderizados via OpenStreetMap, sem necessidade de chave de API

---

## 📄 Licença

Projeto acadêmico desenvolvido para a disciplina de MVP — uso educacional.

---

<p align="center">
  Feito com 🌿 por <strong>Equipe TerêVerde</strong> — Teresópolis, 2025
</p>
