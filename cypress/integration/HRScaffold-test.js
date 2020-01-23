describe('HRScaffold Tests', () => {
	let anchors = [];
	beforeEach(() => {
		cy.login();
	});
	it('Check Employees in HRScaffold!', () => {
		cy.get('a[name="gridButton"]')
			.should('have.attr', 'caption', 'Employees')
			.click()
			.url()
			.should('include', 'Employees')
			.get('label[name="label1"]')
			.should('have.attr', 'caption', 'Employees')
			.get('a[name="wm-switch-Grid"]')
			.click()
			.should('have.class', 'selected')
			.get('div[name="EmployeeGrid"]')
			.should('have.attr', 'title', 'Grid View');
	});
	it('Check Departments in HRScaffold!', () => {
		cy.get('a[name="widgetsButton"]')
			.should('have.attr', 'caption', 'Departments')
			.click()
			.url()
			.should('include', 'Departments')
			.get('a[title="Marketing"]')
			.click()
			.get('div[title="Jane"]')
			.get('a[title="General and Admin"]')
			.click();
	});

	it.only('Check anchors', () => {
		cy.get('a[name="gridButton"]').should('have.attr', 'caption', 'Employees');

		let anchors = [];
		cy.get('.app-anchor')
			.not('.active')
			.not('a[name="logoutButton"]')
			.each($el => {
				if ($el.attr('name')) anchors.push($el.attr('name'));
			})
			.then(() => {
				anchors.forEach(name =>
					cy
						.get('a[name=' + name + ']')
						.click()
						.wait(1000)
				);
			});
	});

	afterEach(() => {
		// cy.get('a[name="logoutButton"]')
		// 	.should('have.attr', 'caption', 'Logout')
		// 	.click({ force: true })
		// 	.get('a[name="forgetPassword"]')
		// 	.should('have.attr', 'caption', 'Forgot Password');
	});
});
