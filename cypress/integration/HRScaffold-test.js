describe('HRScaffold Tests', () => {
	beforeEach(() => {
		cy.signin();
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
});
