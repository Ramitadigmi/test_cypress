describe('Login Azurewebsites', () => {
    it('succes creat customer search and detail', () => { //tescasespostive1
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('ramitaD')
    cy.get('#Password').type('ramita12345')
    cy.get('.btn-primary').click()
    cy.get('h3').should('have.text', 'Welcome ramitaD')
    cy.get(':nth-child(4) > .btn').click()
    cy.get('h4').should('have.text', 'Customer')
    cy.get('#Name').type('coba')
    cy.get('#Company').type('maju mundur')
    cy.get('#Address').type('jalan terus')
    cy.get('#City').type('indonesia')
    cy.get('#Phone').type('08000008888')
    cy.get('#Email').type('cobain@gmail.com')
    cy.get('.col-md-offset-2 > .btn').click()
    cy.get('h2').should('have.text', 'Customer Details')
    cy.get('#searching').type('coba')
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(3) > :nth-child(7) > .btn-outline-info').click()
    cy.get('.btn-link').click()
    })

    it('succes edit name customer', () => { //tescasepositive2
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('ramitaD')
    cy.get('#Password').type('ramita12345')
    cy.get('.btn-primary').click()
    cy.get('h3').should('have.text', 'Welcome ramitaD')
    cy.get('#searching').type('coba')
    cy.get('.container > div > form > .btn').click()
    cy.get(':nth-child(3) > :nth-child(7) > .btn-outline-info').click()
    cy.get('.btn-outline-primary').click()
    cy.get('#Name').clear()
    cy.get('#Name').type('coba2')
    cy.get('.col-md-offset-2 > .btn').click()
    })

    it('succes delete name customer', () => { //tescasepositive3
      cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('ramitaD')
    cy.get('#Password').type('ramita12345')
    cy.get('.btn-primary').click()
    cy.get('h3').should('have.text', 'Welcome ramitaD')
    cy.get('#searching').type('coba2')
    cy.get('.container > div > form > .btn').click()
    cy.get('.btn-outline-danger').click()
    cy.get('h3').should('have.text', 'Are you sure you want to delete this?')
    cy.get('.btn-outline-danger').click()
    cy.url().should('include', '/Dashboard')
    })
})