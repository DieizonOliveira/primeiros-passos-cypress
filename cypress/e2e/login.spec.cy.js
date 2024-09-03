describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']" 


  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Teste')
    cy.get(selectorList.passwordField).type('Teste')
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
