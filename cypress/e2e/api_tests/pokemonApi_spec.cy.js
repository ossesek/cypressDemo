describe('APi Test of pokeapi.co', () => {

  describe('Testing of PokeApi', () => {

    beforeEach(function () {
      cy.fixture('pokeapi.json').then(data => {
        this.pokeData = data;
        cy.visit(data.baseUrl);
      })
    })

    it('Call Pokemons endpoint @intercept', function () {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('pokemons');
      cy.get('#url-input').clear().type('pokemon{enter}');
      cy.wait('@pokemons').its('response.statusCode').should('eq', 200);
      cy.get('@pokemons').then(res => {
        expect(res.response.body.results).to.have.lengthOf(20);
      })
    })

    it('Call Charizard Pokemon @intercept', function () {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/charizard').as('charizard');
      cy.get('#url-input').clear().type('pokemon/charizard{enter}');
      cy.wait('@charizard').then(res => {
        expect(res.response.statusCode).to.equal(200);
        expect(res.response.body.weight).to.be.oneOf([905,906]);
        expect(res.response.body.name).to.be.eq('charizard');
      })
    })

  })
})

