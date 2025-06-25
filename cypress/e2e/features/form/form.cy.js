describe('Booking Form Feature Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Update if using a different dev server
    });

    it('Fills out and submits the form', () => {
        cy.get('#name').type('Raymond Frias');
        cy.get('#number').type('2');
        cy.get('#datetime-local').type('2025-06-30T10:00');
        cy.get('#email').type('ray@example.com');
        cy.get('#terms').check();

        // Simulate form submission
        cy.get('form').submit();

        // Optional: Check for success UI (toast, thank you, or redirect)
        // cy.contains('Thank you').should('exist');
    });

    it('Shows validation when required fields are missing', () => {
        cy.get('form').submit();

        // Let the browser show its built-in validation (if not handled by JS)
        // We can check that one or more fields are invalid:
        cy.get('#name').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });

        cy.get('#email').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });
    });
});
