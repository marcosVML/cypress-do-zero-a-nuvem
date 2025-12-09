// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker'

// Custom command to fill mandatory fields and submit the form
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {
  const payload = data ?? {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    message: faker.lorem.paragraph()
  }

  cy.get('#firstName').type(payload.firstName)
  cy.get('#lastName').type(payload.lastName)
  cy.get('#email').type(payload.email)
  cy.get('#open-text-area').type(payload.message)
  cy.get('button[type="submit"]').click()
})