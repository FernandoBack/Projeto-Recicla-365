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
    * **Hooks (`useState`, `useEffect`, etc.)**: Utilizados para gerenciar estado e ciclo de vida dos componentes.
    * **`Context API`**: Usada para o gerenciamento de estado global, como informações de autenticação do usuário.
* **`JavaScript (ES6+)`**: Linguagem de programação base.
* **`LocalStorage`**: API do navegador utilizada para persistência de dados no lado do cliente.

#### Dependências Principais (Instaladas via NPM)

* **`@mui/material`**: A biblioteca principal de componentes React do Material-UI, que serve como base para nosso Design System.
* **`@emotion/react` & `@emotion/styled`**: A engine de estilização padrão do MUI (CSS-in-JS).
* **`@mui/icons-material`**: Biblioteca de ícones SVG prontos para uso.
* **`Vite`**: Ferramenta de build de última geração que oferece um ambiente de desenvolvimento extremamente rápido.
* **`React Router Dom`**: Biblioteca para a criação de rotas, permitindo a navegação SPA (Single Page Application).
* **`Axios` (Opcional, mas recomendado)**: Cliente HTTP para realizar as chamadas à API externa do ViaCEP.

---

### 4. APIs Utilizadas

-   **ViaCEP (API Externa)**: Integrada para a funcionalidade de preenchimento automático de endereço a partir de um CEP.
-   **API Local (Simulada com `LocalStorage`)**: Para este MVP, todas as operações de CRUD de usuários e locais de coleta são gerenciadas localmente no navegador.

---

### 5. Estrutura e Padrões de Projeto

A arquitetura do projeto foi pensada para ser escalável e de fácil manutenção.

-   **Biblioteca de Componentes (Material-UI)**: Adotamos o Material-UI como nossa principal biblioteca de UI. Isso nos fornece um conjunto rico e testado de componentes (nossos "átomos" e "moléculas" de base), acelerando o desenvolvimento e garantindo consistência visual.
-   **Estrutura Inspirada no Atomic Design**: Embora usemos componentes prontos, a organização das nossas pastas (`pages`, `organisms`, etc.) e a forma como combinamos os componentes se inspira em conceitos do Atomic Design para criar partes maiores e reutilizáveis da interface.
-   **Responsividade (Mobile First)**: A responsividade é tratada como prioridade, aproveitando os recursos do sistema de Grid e os componentes já responsivos do Material-UI, com ajustes pontuais quando necessário.

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

-   **Integração com um Back-end real**: Substituir o `localStorage` por uma API REST e um banco de dados.
-   **Mapa Interativo**: Exibir os pontos de coleta em um mapa.
-   **Perfil de Usuário**: Página para o usuário gerenciar seus dados e histórico.
-   **Gamificação**: Sistema de pontos para incentivar a reciclagem.
-   **Testes Automatizados**: Implementação de testes para garantir a qualidade do código.

---

### 9. Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
