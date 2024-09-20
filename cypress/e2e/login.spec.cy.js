import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']" 
  }


  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})


//  1- Os seletores maiores inicialmente foram feitos direto com o cypres e para achar os menores usamos o css selector.
//Exemplo: cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Teste')
//  2 - Após fomos para seletores menores com ajuda do css Selector:
// Exemplo: cy.get("[name='username']").type('Admin') (Estes agora estão no objeto)
//  3 - Depois passamos a utilizar objeto para facilitar uma possivel alteração e não termos repetição de código.
// SKIP: it.skip('Login - Success', () => {... Serve para pular a execução de um teste quando desejado.
