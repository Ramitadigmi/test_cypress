describe('Signup Azurewebsites', () => {
  it.skip('Succes Signup', () => { //testcasepositive
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.url().should('include', 'https://itera-qa.azurewebsites.net/UserRegister/NewUser')
    cy.get('#FirstName').type('tes')
    cy.get('#Surname').type('coba')
    cy.get('#E_post').type('test.coba00@gmail.com')
    cy.get('#Mobile').type('088822228888')
    cy.get('#Username').type('tes01')
    cy.get('#Password').type('tes12345')
    cy.get('#ConfirmPassword').type('tes12345')
    cy.get('#submit').click()
    cy.get('.label-success').should('have.text', 'Registration Successful')
  })

  it.skip('Failed Signup with same input field', () => { //testcasenegative1
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.url().should('include', 'https://itera-qa.azurewebsites.net/UserRegister/NewUser')
    cy.get('#FirstName').type('tes')
    cy.get('#Surname').type('coba')
    cy.get('#E_post').type('test.coba00@gmail.com')
    cy.get('#Mobile').type('088822228888')
    cy.get('#Username').type('tes01')
    cy.get('#Password').type('tes12345')
    cy.get('#ConfirmPassword').type('tes12345')
    cy.get('#submit').click()
    cy.get('.label-danger').should('have.text', 'Username already exist')
  })

  it('Failed Signup with no input field', () => { //testcasenegative2
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    cy.url().should('include', 'https://itera-qa.azurewebsites.net/UserRegister/NewUser')
    cy.get('#submit').click()
    cy.get('#FirstName-error').should('have.text', 'Please enter first name')
    cy.get('#Surname-error').should('have.text','Please enter surname')
    cy.get('#Username-error').should('have.text','Please enter username')
    cy.get('#Password-error').should('have.text','Please enter password')
  })
})
