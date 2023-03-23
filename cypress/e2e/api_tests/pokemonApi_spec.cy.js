import { faker } from '@faker-js/faker';

describe('APi Test of pokeapi.co', () => {

    beforeEach(function () {
        cy.fixture('pokeapi.json').then(data => {
            this.pokeData = data;
        })
    })

    it('Call pokemons with response limit of 10000 @Api', function () {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100000').as('allPokemons');
        cy.get('@allPokemons').then(res => {
            expect(res.status).to.eq(200);
            expect(res.body.results).to.have.length(1281);
            expect(res.statusText).to.eq(this.pokeData.status200);
        })
    })

    it('Call undefined Pokemon', function () {
        cy.request({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/'${faker.name.firstName()}`,
            failOnStatusCode: false
        }).as('randomPokemon');

        cy.get('@randomPokemon').then(res => {
            expect(res.status).to.be.equal(404);
            expect(res.statusText).to.eq(this.pokeData.status404);
            expect(res.isOkStatusCode).to.be.false;
            expect(res.duration).to.be.below(2500);
        })
    })

})

