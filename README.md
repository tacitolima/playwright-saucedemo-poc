# Prova de Conceito: Automação com Playwright e TypeScript para Sauce Demo

Este projeto é uma estrutura completa e robusta para automação de testes web utilizando Playwright, TypeScript e o padrão Page Object Model (POM). Ele está pré-configurado para testar o site de demonstração [Sauce Demo](https://www.saucedemo.com/) e inclui integração com relatórios Allure e um workflow de GitHub Actions.

##  Funcionalidades

- **Padrão de Projeto:** Page Object Model (POM) com uma classe base para reutilização de código.
- **Gerenciamento de Dados:** Separação dos dados de teste (usuários/senhas) em um arquivo `fixtures/users.json`, mantendo o código limpo e seguro.
- **Múltiplos Ambientes:** Suporte para diferentes ambientes (ex: `qa`, `prod`) através de arquivos `.env`.
- **Testes Cross-Browser:** Configurado para rodar os testes nos navegadores Chromium, Firefox e WebKit.
- **Relatórios Avançados:** Integração com o Allure Framework para gerar relatórios de teste detalhados e interativos.
- **Integração Contínua:** Workflow de GitHub Actions (`.github/workflows/playwright.yml`) para rodar os testes automaticamente e publicar os relatórios no GitHub Pages.

##  Prerequisites

Antes de começar, garanta que você tenha os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
- npm (geralmente instalado junto com o Node.js)

##  Guia de Instalação e Execução

### 1. Preparar o Projeto

Após descompactar o arquivo `.zip` ou clonar o repositório, navegue até a pasta raiz do projeto pelo seu terminal.

### 2. Instalar Dependências

Execute o comando abaixo para instalar todas as dependências do projeto, incluindo o Playwright e seus navegadores:

```bash
npm install
```

### 3. Configurar os Dados de Teste

Os dados de usuário são gerenciados externamente para manter as credenciais fora do código-fonte.

- Na pasta `fixtures/`, você encontrará um arquivo chamado `users.json.example`.
- **Renomeie ou copie** este arquivo para `users.json`.

```bash
# No Linux ou macOS
cp fixtures/users.json.example fixtures/users.json

# No Windows (Command Prompt)
copy fixtures\users.json.example fixtures\users.json
```

O arquivo `fixtures/users.json` já contém as credenciais corretas para o `standard_user` do Sauce Demo, então não é necessário editá-lo para o teste principal. Ele é ignorado pelo Git através do arquivo `.gitignore`.

### 4. Executar os Testes

Você pode rodar os testes para ambientes específicos usando os scripts definidos no `package.json`.

**Para rodar no ambiente de QA:**
```bash
npm run test:qa
```

Isso executará todos os arquivos `*.spec.ts` dentro da pasta `tests/` utilizando a configuração `baseURL` definida em `.env.qa` e os dados de usuário de `fixtures/users.json`.

### 5. Visualizar os Relatórios (Allure)

Após a execução dos testes, os resultados brutos do Allure serão gerados na pasta `allure-results/`.

**Para gerar e abrir o relatório HTML:**

1.  Primeiro, gere o relatório:
    ```bash
    npm run allure:generate
    ```

2.  Depois, abra-o no seu navegador:
    ```bash
    npm run allure:open
    ```

Isso irá iniciar um servidor web local e abrir o dashboard do Allure com os resultados detalhados da última execução.
