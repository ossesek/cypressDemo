export class PokeapiPage {

    inputSelector = '#url-input';

    typeAndCall(request) {
        cy.get(this.inputSelector)
            .clear()
            .type(request + '{enter}');
    }
}