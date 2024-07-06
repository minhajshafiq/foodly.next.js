describe('signup', () => {
    it('should signup', () => {
        cy.visit('/')
        cy.get('button[role="signup"]').click()
        cy.get('#firstname').type('Joe')
        cy.get('#lastname').type('Doe')
        cy.get('#email').type('joe@gmail.com')
        cy.get('#password').type('123456A')
        cy.get('button[role="inscriptioncheckout"]').click()
    })
})