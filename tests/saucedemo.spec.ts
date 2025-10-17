import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { allure } from "allure-playwright";

// Importa os dados de usuário do arquivo JSON
import users from '../fixtures/users.json';

// Define o ambiente e seleciona o usuário correspondente
const environment = process.env.TEST_ENV || 'qa';
const user = (users as any)[environment].default_user;

test.describe('Fluxo de Acesso Sauce Demo', () => {
  
  test.beforeAll(() => {
    if (!user || !user.username || !user.password) {
      throw new Error(`Dados de usuário não encontrados para o ambiente: ${environment} no arquivo users.json`);
    }
  });

  test('deve realizar o login e verificar a página de produtos', async ({ page }) => {
    await allure.description('Este teste valida o fluxo de login e o correto carregamento da página de produtos do Sauce Demo.');
    await allure.owner('Equipe de Automação');
    await allure.tags('Login', 'Smoke Test', 'SauceDemo');
    
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await allure.step('Passo 1: Acessar a página de login', async () => {
      await loginPage.goto();
    });

    await allure.step('Passo 2: Executar o login com credenciais válidas', async () => {
      await loginPage.doLogin(user.username, user.password);
    });

    await allure.step('Passo 3: Verificar se a página de produtos foi carregada', async () => {
      // O método `assertPageLoaded` da ProductsPage contém as validações
      await productsPage.assertPageLoaded();
    });
  });
});