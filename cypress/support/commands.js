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
Cypress.Commands.add('login', () => {
	cy.visit(Cypress.env('baseUrl'))
		.get('input[name="j_username"]')
		.type(Cypress.env('username'))
		.get('input[name="j_password"]')
		.type(Cypress.env('password'))
		.get('button[name="loginButton"]')
		.click();
	cy.get('a[name="gridButton"]').should('have.attr', 'caption', 'Employees');
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
