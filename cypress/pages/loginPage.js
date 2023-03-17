export class LoginPage {

    usernameSelector = '#username';
    passwordSelector = '#password';

    performLogin(username, password){
        cy.get(this.usernameSelector).type(username);
        cy.get(this.passwordSelector).type(password);
        cy.log(`Starting login process for user ${username}`);
        cy.get('input').contains('Login').click();
    }
}