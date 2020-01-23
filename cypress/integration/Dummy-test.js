describe('Dummy Tests', () => {
	beforeEach(() => {
		cy.visit('/')
			.get('input[name="j_username"]')
			.type('user')
			.get('input[name="j_password"]')
			.type('user')
			.get('button[name="loginButton"]')
			.click();
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

	it('Check anchors', () => {
		cy.get('a[name="gridButton"]').should('have.attr', 'caption', 'Employees');
		cy.get('a')
			.not('a[name="homeButton"]')
			.not('a[name="logoutButton"]')
			.each($element => {
				console.log($element);
				cy.get($element[0])
					.click({ force: true })
					.wait(5000)
					.go('back');
			});
	});

	afterEach(() => {
		cy.get('a[name="logoutButton"]')
			.should('have.attr', 'caption', 'Logout')
			.click()
			.get('a[name="forgetPassword"]')
			.should('have.attr', 'caption', 'Forgot Password');
	});
});
