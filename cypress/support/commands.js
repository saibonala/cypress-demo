Cypress.Commands.add('signin', () => {
	cy.visit(Cypress.env('url'), {
		auth: {
			username: Cypress.env('userid'),
			password: Cypress.env('secret')
		},
	});
	cy.get('section[type="header"]')
	.should('have.attr', 'name', 'header');
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
// cy.visit(Cypress.env('url'))
	// 	.get('input[name="j_username"]')
	// 	.type(Cypress.env('userid'))
	// 	.get('input[name="j_password"]')
	// 	.type(Cypress.env('secret'))
	// 	.get('button[name="loginButton"]')
	// 	.click()