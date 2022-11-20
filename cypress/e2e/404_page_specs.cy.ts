describe('Testing Error Page', () => {
  it('visit page', () => {
    cy.visit('/error')
  })

  it('load heading', () => {
    cy.get('h1').contains('404')
  })

  it('load message', () => {
    cy.get('h2').contains('It seems')
  })

  it('load, hover, click btn go home', () => {
    cy.get('a.button-primary').trigger('mouseover').click()
  })
})
