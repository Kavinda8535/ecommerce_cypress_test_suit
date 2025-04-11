import LoginPage from '../pageObjects/loginPage';

const loginPage = new LoginPage();

describe('Login Test for Magento Demo Site', () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
  });

  it('should login successfully with valid credentials', function () {
    loginPage.visitLogin();
    loginPage.login(this.userData.email, this.userData.password);

    // ✅ Assertion for successful login (example: check if My Account is visible)
    // cy.get('h1.page-title').should('contain.text', 'My Account');
    cy.get('li.greet.welcome').should('contain.text', 'Welcome, Kevin Pat!');
  });
});
