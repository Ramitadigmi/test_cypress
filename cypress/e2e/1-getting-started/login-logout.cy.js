describe('Login Azurewebsites', () => {
  it('success login', () => { //tescasespostive
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
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    
  })

  it('login wrong password', () => { //testcasenegative1
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('ramitaD')
    cy.get('#Password').type('aaaaa1111')
    cy.get('.btn-primary').click()
    cy.get('.alert-danger').should('have.text', 'Wrong username or password')
  })

  it('login wrong username', () => { //testcasenegative2
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('ram123qq')
    cy.get('#Password').type('ramita12345')
    cy.get('.btn-primary').click()
    cy.get('.alert-danger').should('have.text', 'Wrong username or password')
  })

  it('login wrong username and password', () => { //testcasenegative3
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get('#Username').type('salah')
    cy.get('#Password').type('salahsemua123')
    cy.get('.btn-primary').click()
    cy.get('.alert-danger').should('have.text', 'Wrong username or password')
  })

})