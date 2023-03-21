// ***********************************************************

// The support file is a great place to put reusable behavior such as custom commands or global overrides 
//that you want applied and available to all of your spec files

// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

// Alternatively you can use CommonJS syntax:
// require('./commands')