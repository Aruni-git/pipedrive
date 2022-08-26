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
Cypress.Commands.add('navigateToURL', () => { 

  cy.visit('/auth/login')
  cy.url().should('eq', 'https://app.pipedrive.com/auth/login')
    })

// -- This is a parent command --
Cypress.Commands.add('loginToApplication', (email, password) => { 

  cy.clearCookies()
  cy.clearLocalStorage()
   //Enter email address
   cy.get('[data-test="login"]').type(email)

   //Enter password
   cy.get('[data-test="password"]').type(password)

   //Click login button
   cy.get('[data-test="submit-button"]').click()
 })
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

 Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false
   })

  

