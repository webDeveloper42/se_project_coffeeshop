describe('Navbar Feature Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // This runs before every test
    });

    it('Shows the navbar', () => {
        cy.get('.nav').should('be.visible');
    });

    it('Contains logo and links', () => {
        cy.get('.nav__logo').should('exist');
        cy.get('.nav__link').should('have.length.at.least', 4);
    });
});
