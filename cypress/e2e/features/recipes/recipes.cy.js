
describe('Recipe Testing Section', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // This runs before every test
    });

    it('Shows the recipe section', () => {
        cy.get('.recipes').should('be.visible');
    });

    it('Contains recipe title and video', () => {
        cy.get('.recipes__title').should('contain', 'Recipes');
        cy.get('.recipes__iframe').should('have.length', 2);
        cy.get('.recipes__iframe').first().should('have.attr', 'src').and('include', 'youtube');
    });
});
