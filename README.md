# CypressDemo

Cypress Demo project with usage examples.

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

## Cypress grep - tagging tests

Thanks to @cypress/grep you can add some tag/string to your test name. e.g.: it('Log in with proper credentials @Login' ... ). 
This will allow you to run only those tests that contain your tag.

You can execute this by running: 
- npx cypress run --env grep="@Login"

## Assertions

Cypress bundles the popular Chai assertion library, as well as helpful extensions for Sinon and jQuery, bringing you dozens of powerful assertions for free

- should - contain
- should - have. (class, text, html)
- should - be. (visible, selected, disabled, focused)
- should - equal 
<br />

- expect().to.be (true, equal)
- assert.equal(actual, expected, message to display on error) 
- assert.isAbove .isBelow .exist .strictEqual - (e.g. 4 and '4') 
<br />

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


## Page Object model 

design principle:
- keep objects & methods separate from test script  (efficient reusability)

You can find it and save it under cypress/pages folder

## Best Practices

- adding the 'data-cy' attribute to the element that gives us a targeted selector that's only used for testing. The data-cy attribute will not change from CSS style or JS behavioral changes, meaning it's not coupled to the behavior or styling of an element
- Tests should always be able to be run independently from one another and still pass.
- Add multiple assertions and don't worry about it
- In Cypress, you almost never need to use cy.wait() for an arbitrary amount of time.
- NOT recommend trying to start your back end web server from within Cypress. Why can't I shut down the process in an after hook?  Because there is no guarantee that code running in an after will always run.
- Set a baseUrl in your Cypress configuration. By adding a baseUrl in your configuration Cypress will attempt to prefix the baseUrl any URL provided to commands like cy.visit() and cy.request() that are not fully qualified domain name (FQDN) URLs. Without baseUrl set, Cypress loads main window in localhost + random port

## Writing and Organizing Tests

> Cypress will create a screenshotsFolder and a videosFolder to store the screenshots and videos taken during the testing of your application. Many users will opt to add these folders to their .gitignore file. Additionally, if you are storing sensitive environment variables in your Cypress configuration or cypress.env.json, these should also be ignored when you check into source control.

> Cypress is built on top of Mocha and Chai. We support both Chai's BDD and TDD assertion styles. Tests you write in Cypress will mostly adhere to this style.

> Test Structure: The test interface, borrowed from Mocha, provides describe(), context(), it() and specify(). context() is identical to describe() and specify() is identical to it(), so choose whatever terminology works best for you.

> Cypress also provides hooks (borrowed from Mocha). These are helpful to set conditions that you want to run before a set of tests or before each test. They're also helpful to clean up conditions after a set of tests or after each test.

> To run a specified suite or test, append .only to the function. All nested suites will also be executed. This gives us the ability to run one test at a time and is the recommended way to write a test suite.

> To skip a specified suite or test, append .skip() to the function. All nested suites will also be skipped.

> Best Practice: Tests should always be able to be run independently from one another and still pass. The goal for each test should be to reliably pass whether run in isolation or consecutively with other tests. Having tests that depend on the state of an earlier test can potentially cause nondeterministic test failures which makes debugging challenging

> Cypress supports both BDD (expect/should) and TDD (assert) style plain assertions

> After the Cypress spec completes every test has one of four statuses: passed, failed, pending, or skipped. The behavior of these statuses are inherited from the Mocha, since this is the test runner leveraged by Cypress.
