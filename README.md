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
- npm run cy:run-headed - run your test with headed mode
- npm run cy:run-mobile - run your test on mobile dimension 

## Assertions

Cypress bundles the popular Chai assertion library, as well as helpful extensions for Sinon and jQuery, bringing you dozens of powerful assertions for free

> for assertion doc refer to: https://docs.cypress.io/guides/references/assertions


## Fixtures and cypress.env file

Fixtures are used to store data used in tests as external file. <br />
You can access your data calling cy.fixture('fixturePath').

Cypress.env file is also used to store data, which will be accessible only in your local repo. <br />
You can access .env variable by calling Cypress.env('variableName')


## Tests reports

Tests reports are done by mochawesome and saved in output/reports directory. Test Report is made for each test suite separately.

To merge reports use below command:

> npx mochawesome-merge cypress/output/reports/*.json > cypress/output/report.json or <br />
> npm run cy:report 
