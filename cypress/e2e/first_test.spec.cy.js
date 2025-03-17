describe('Heading text', () =>{
    it('contains the correct title', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')

        // Assersion with condition. Find h1 element and take text and make it equal to the quated text.
        cy.get('h1 span')
            .invoke('text')
            .should('equal','Customer Login');

    })
})