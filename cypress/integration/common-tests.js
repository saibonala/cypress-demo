describe('Common tests', () => {
	before(() => {
		cy.signin();
	});

	it('Check anchors', () => {
		let anchors = [];
		cy.get('a')
			.not('.active, a[caption="LOGOUT"], a[caption="Logout"]')
			.each($el => {
				if ($el.attr('name')) anchors.push($el.attr('name'));
			})
			.then(() => {
				anchors.forEach(name =>
					cy
						.get('a[name=' + name + ']')
						.click()
						.wait(2000)
				);
			});
	});
});
