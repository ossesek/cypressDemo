describe('Test login & logout feature of skleptest.pl', () => {

  let data;

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
  })

  it('Log in with proper credentials', () => {
    cy.get('.top-account').click();
    cy.get('#username').type(data.goodEmail);
    cy.get('#password').type(Cypress.env('password'));
    cy.log(`Starting login process`);
    cy.get('input').contains('Login').click();

    cy.get('a').contains('Logout');
    cy.log(`User successfully logged in`);
  })

  it('Log in with wrong credentials', () => {
    cy.get('.top-account').click();
    cy.get('#username').type(data.wrongEmail);
    cy.get('#password').type('randomStringChain');
    cy.log(`Negative case: Starting login process`);
    cy.get('input').contains('Login').click();

    cy.get('strong').should('have.text','Error:');
    cy.get('li').contains('user could not be found');
    cy.log(`Negative case: Log in failed`);
  })

  it('Log in with wrong password', () => {
    cy.get('.top-account').click();
    cy.get('#username').type(data.goodEmail);
    cy.get('#password').type('randomStringChain');
    cy.log(`Starting login process`);
    cy.get('input').contains('Login').click();

    cy.get('strong').contains('ERROR');
    cy.get('li').contains(`The password you entered for the username ${data.goodEmail} is incorrect`);
    cy.log(`Negative case: Log in failed`);
  })

})

