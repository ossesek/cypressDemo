# CypressDemo


## Remote Repository
- origin - github repo
- origin2 - gitlab repo

## How to run test

- npm run cy:open - opens cypress app
- npm run cy:run - runs test <br />
add --spec "spec-path" to run particular test <br />
spec doc: https://docs.cypress.io/guides/guides/command-line <br />
By default, cypress run will run all tests headlessly
-npm run cy:run-headed - run your test with headed mode
-npm run cy:run-mobile - run your test on mobile dimension 


## Fixtures and cypress.env file

Fixtures are used to store data used in tests as external file. <br />
You can access your data calling cy.fixture('fixturePath').

Cypress.env file is also used to store data, which will be accessible only in your local repo. <br />
You can access .env variable by calling Cypress.env('variableName')