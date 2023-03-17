import { LoginPage } from "../../pages/loginPage";

describe('Test login & logout feature of skleptest.pl', () => {

  let data;
  const loginPage = new LoginPage();

  before(async () => {
    data = await cy.fixture('skleptest_credentials').then( (data) => {
      return data; 
    });
    cy.log('data:', data)
  })

  beforeEach(() => {
    cy.visit(data.baseUrl);
    cy.contains('Generic Shop');
    cy.log(`Successfully reached page ${data.baseUrl}`);

    cy.get('.top-account').click();
  })

  it('Log in with proper credentials', () => {
    loginPage.performLogin(data.goodEmail,Cypress.env('password'));

    cy.contains('a', 'Logout').should('be.visible').and('have.attr', 'href');
    cy.log(`User successfully logged in`);
  })

  it('Log in with wrong credentials', () => {
    loginPage.performLogin(data.wrongEmail,'randomStringChain');

    cy.contains('strong','Error:');
    cy.contains('li','user could not be found');
    cy.log(`Negative case - wrong user: Log in failed`);
  })

  it('Log in with wrong password', () => {
    loginPage.performLogin(data.goodEmail,'randomStringChain');

    cy.contains('strong','ERROR');
    cy.contains('li',`The password you entered for the username ${data.goodEmail} is incorrect`);
    cy.log(`Negative case - wrong password: Log in failed`);
  })

})

