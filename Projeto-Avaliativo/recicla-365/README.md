# Recicla365 ♻️

### MVP de uma plataforma para gerenciamento e localização de pontos de coleta de materiais recicláveis.

![Badge de Status do Deploy](https://vercel.com/fernando-backs-projects/projeto-recicla-365/badge)
![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

---

### 📖 Índice

- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Layout da Aplicação](#2-layout-da-aplicação)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Tecnologias Utilizadas](#4-tecnologias-utilizadas)
- [5. Estrutura de Pastas](#5-estrutura-de-pastas)
- [6. Como Executar o Projeto](#6-como-executar-o-projeto)
- [7. Melhorias Futuras](#7-melhorias-futuras)
- [8. Licença](#8-licença)

---

### **1. Sobre o Projeto**

O **Recicla365** nasceu da necessidade de centralizar informações sobre o descarte correto de resíduos, conectando cidadãos engajados com o meio ambiente a pontos de coleta eficientes. A plataforma resolve o problema da desinformação, facilitando a busca por locais de reciclagem e permitindo que a própria comunidade contribua, cadastrando e gerenciando novos pontos de coleta.

Este projeto é um MVP (Mínimo Produto Viável) completo que demonstra todas as funcionalidades essenciais de uma aplicação web moderna.

---

### **2. Layout da Aplicação**


| Página de Login | Dashboard | Gerenciamento (CRUD) |
| :---: | :---: | :---: |
| https://github.com/FernandoBack/Projeto-Recicla-365/blob/main/.github/images/Login.png | https://github.com/FernandoBack/Projeto-Recicla-365/blob/main/.github/images/Dashboar.png| https://github.com/FernandoBack/Projeto-Recicla-365/blob/main/.github/images/Gerenciamento_CRUD.png |

---

### **3. Funcionalidades**

- [x] **Sistema de Autenticação Completo:** Cadastro de novos usuários com validação de CPF único e Login.
- [x] **Gerenciamento de Estado Global:** Uso da Context API do React para um controle de autenticação robusto em toda a aplicação.
- [x] **Roteamento Inteligente:** Navegação protegida para usuários autenticados e um layout que se adapta dinamicamente ao status de login.
- [x] **Integração com API Externa:** Preenchimento automático de endereço nos formulários através da API ViaCEP.
- [x] **Dashboard Analítico:** Exibição de cards com dados dinâmicos (total de usuários e locais cadastrados) e uma lista de visualização dos pontos de coleta.
- [x] **CRUD Completo:** Funcionalidades para Criar, Ler, Atualizar e Deletar pontos de coleta, com formulários em modais para uma melhor experiência do usuário.

---

### **4. Tecnologias Utilizadas**

Abaixo estão as principais tecnologias e bibliotecas utilizadas no desenvolvimento do Recicla365:

- **React (v18):** Biblioteca principal para a construção da interface de usuário.
- **Vite:** Ferramenta de build extremamente rápida para um ambiente de desenvolvimento moderno.
- **React Router DOM (v6):** Para gerenciamento de rotas e navegação no estilo SPA (Single Page Application).
- **Material-UI (MUI v5):** Biblioteca de componentes para a criação de um design system consistente e responsivo.
- **Context API:** Para gerenciamento de estado global, especificamente para o contexto de autenticação.
- **Vercel:** Plataforma para deploy contínuo (CI/CD) e hospedagem do projeto.

---

### **5. Estrutura de Pastas**

O projeto foi estruturado seguindo os princípios do **Atomic Design**, visando a máxima reutilização de componentes e uma clara separação de responsabilidades.

```
/src
├── components/
│   ├── molecules/       (Componentes complexos, ex: SummaryCard)
│   ├── organisms/       (Seções da UI, ex: Header, PointFormModal)
│   └── templates/       (Estruturas de página, ex: MainLayout)
├── contexts/            (Contextos globais, ex: AuthContext)
├── pages/               (Páginas completas da aplicação)
└── services/            (Dados mockados e lógica de serviços)
```

---

### **6. Como Executar o Projeto**

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/FernandoBack/Projeto-Recicla-365.git](https://github.com/FernandoBack/Projeto-Recicla-365.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Projeto-Recicla-365/recicla-365
    ```
    *(Ajuste o caminho se a pasta que contém o `package.json` for diferente)*
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  Abra http://localhost:5173 (ou o endereço que aparecer no terminal) no seu navegador.

---

### **7. Melhorias Futuras**

Como um MVP, o projeto tem um grande potencial de evolução. Algumas melhorias planejadas são:
- **Integração com Backend Real:** Substituir o `localStorage` por uma API RESTful para persistência de dados real.
- **Vínculo Usuário-Local:** Implementar a lógica para associar cada ponto de coleta ao usuário que o cadastrou.
- **Geolocalização Avançada:** Utilizar a geolocalização do navegador ou uma API de mapas (como Google Maps) para exibir os pontos em um mapa interativo.
- **Validação de Formulários:** Adicionar uma biblioteca como `React Hook Form` com `Zod` para validações mais robustas.
- **Testes Automatizados:** Implementar uma suíte de testes com `Vitest` e `React Testing Library` para garantir a qualidade e a estabilidade do código.

---

### **8. Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.