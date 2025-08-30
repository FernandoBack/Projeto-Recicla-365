# Recicla365 ♻️

**MVP de uma plataforma para gerenciamento e localização de pontos de coleta de materiais recicláveis.**

[![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=projeto-recicla-365)](https://projeto-recicla-365.vercel.app/)

---

### 📖 Índice

- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Layout da Aplicação](#2-layout-da-aplicação)
- [3. Tecnologias Utilizadas](#3-tecnologias-utilizadas)
- [4. APIs Utilizadas](#4-apis-utilizadas)
- [5. Estrutura e Padrões de Projeto](#5-estrutura-e-padrões-de-projeto)
- [6. Funcionalidades](#6-funcionalidades)
- [7. Como Executar o Projeto](#7-como-executar-o-projeto)
- [8. Melhorias Futuras](#8-melhorias-futuras)
- [9. Licença](#9-licença)

---

### 1. Sobre o Projeto

O **Recicla365** é uma plataforma criada para resolver um problema urbano comum: a dificuldade de encontrar pontos de coleta de lixo reciclável e a falta de engajamento da comunidade no processo de reciclagem. A aplicação conecta pessoas que desejam reciclar com locais de coleta verificados, permitindo que usuários cadastrem novos pontos e gerenciem suas contribuições para um ambiente mais sustentável.

Este projeto é o **MVP (Minimum Viable Product)** do front-end da aplicação, desenvolvido como parte do projeto avaliativo do Módulo 1 do curso do LAB365.

---

### 2. Layout da Aplicação

*(Esta seção será atualizada com screenshots e/ou GIFs da aplicação quando as telas principais estiverem concluídas.)*

**Layout Mobile**
![Layout Mobile](https://via.placeholder.com/300x600.png?text=Preview+Mobile)

**Layout Desktop**
![Layout Desktop](https://via.placeholder.com/800x450.png?text=Preview+Desktop)

---

### 3. Tecnologias Utilizadas

A aplicação é construída com uma base moderna de JavaScript e React, com foco em boas práticas e ferramentas que otimizam o desenvolvimento.

#### Base da Aplicação (Incluso no React)

* **`React (v18+)`**: A biblioteca principal para a construção da interface.
    * **Hooks (`useState`, `useEffect`, etc.)**: Utilizados para gerenciar estado, ciclo de vida e outros recursos do React. **Não requerem instalação separada**, pois são parte nativa da biblioteca e são importados diretamente do pacote `react`.
    * **`Context API`**: Usada para o gerenciamento de estado global, como informações de autenticação do usuário, evitando o "prop drilling".
* **`JavaScript (ES6+)`**: Linguagem de programação base.
* **`LocalStorage`**: API do navegador utilizada para persistência de dados no lado do cliente.

#### Dependências Principais (Instaladas via NPM)

* **`Vite`**: Ferramenta de build de última geração que oferece um ambiente de desenvolvimento extremamente rápido.
* **`React Router Dom`**: Biblioteca para a criação de rotas, permitindo a navegação SPA (Single Page Application) entre as diferentes páginas.
* **`CSS Modules`**: Padrão de estilização adotado para garantir que os estilos de cada componente sejam escopados localmente, evitando conflitos globais.
* **`Axios` (Opcional, mas recomendado)**: Cliente HTTP para realizar as chamadas à API externa do ViaCEP de forma mais robusta e com melhor tratamento de erros.

---

### 4. APIs Utilizadas

-   **ViaCEP (API Externa)**: Integrada para a funcionalidade de preenchimento automático de endereço a partir de um CEP. Isso melhora a experiência do usuário e a qualidade dos dados de localização.
-   **API Local (Simulada com `LocalStorage`)**: Para este MVP, todas as operações de criação, leitura, atualização e exclusão (CRUD) de usuários e locais de coleta são gerenciadas localmente no navegador através da Web Storage API (`localStorage`). Uma futura versão do projeto substituirá essa simulação por uma API RESTful completa com um banco de dados dedicado.

---

### 5. Estrutura e Padrões de Projeto

A arquitetura do projeto foi pensada para ser escalável e de fácil manutenção, seguindo boas práticas do mercado.

-   **Atomic Design**: A estrutura de componentes é organizada em **Atoms**, **Molecules**, **Organisms**, **Templates** e **Pages**, garantindo o máximo de reuso e desacoplamento.
-   **Responsividade (Mobile First)**: A estilização foi desenvolvida priorizando a experiência em dispositivos móveis e depois adaptada para telas maiores (tablets e desktops).
-   **Componentização**: Toda a aplicação é dividida em componentes funcionais e reutilizáveis.

---

### 6. Funcionalidades

-   [ ] **Autenticação de Usuários**: Sistema de Login e Cadastro.
-   [ ] **Gerenciamento de Usuários**: Carregamento de dados iniciais via `localStorage` e cadastro de novos usuários com CPF único.
-   [ ] **Dashboard**: Visão geral com estatísticas (total de usuários e locais) e uma listagem simples dos pontos de coleta.
-   [ ] **CRUD de Locais de Coleta**:
    -   [ ] **Cadastrar** um novo ponto de coleta com busca de endereço via CEP.
    -   [ ] **Listar** todos os pontos de coleta com opções de ação.
    -   [ ] **Editar** as informações de um ponto de coleta existente.
    -   [ ] **Excluir** um ponto de coleta.
-   [ ] **Navegação Protegida**: Rotas que só podem ser acessadas por usuários autenticados.

---

### 7. Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

**Pré-requisitos:**
-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   [Git](https://git-scm.com/)

```bash
# 1. Clone o repositório a partir do GitHub
git clone [https://github.com/FernandoBack/Projeto-Recicla-365.git](https://github.com/FernandoBack/Projeto-Recicla-365.git)

# 2. Acesse a pasta do projeto
cd Projeto-Recicla-365

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra http://localhost:5173 no seu navegador para ver a aplicação.
```

---

### 8. Melhorias Futuras

Este MVP é a base para uma aplicação muito maior. Algumas melhorias que podem ser implementadas no futuro são:

-   **Integração com um Back-end real**: Substituir o `localStorage` por uma API REST e um banco de dados.
-   **Mapa Interativo**: Utilizar a latitude e longitude para exibir os pontos de coleta em um mapa (com bibliotecas como Leaflet.js ou Google Maps API).
-   **Perfil de Usuário**: Uma página onde o usuário pode ver seu histórico de contribuições e gerenciar seus dados.
-   **Gamificação**: Sistema de pontos e medalhas para incentivar a reciclagem.
-   **Testes Automatizados**: Implementação de testes unitários e de integração para garantir a qualidade do código.

---

### 9. Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.