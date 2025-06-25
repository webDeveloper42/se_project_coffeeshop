describe('Menu Feature Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // This runs before every test
    });

    it('Shows the menu section', () => {
        cy.get('.menu').should('be.visible');
    });

    it('Contains Menu title and description and checks the cards details', () => {
        cy.get('.menu__title').should('contain', 'Menu');
        cy.get('.card').should('have.length.at.least', 3);
        cy.get('.card__title').contains('Expresso');
        cy.get('.card__price').each(($el) => {
            expect($el.text()).to.match(/^\$\d+(\.\d{1,2})?$/); // check price format
        });
    });
});
