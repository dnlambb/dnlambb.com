describe('Visit About Page', () => {
  it('visit page', () => {
    cy.visit('/about')
    cy.title().should('include', 'Daniel Cordero • About me')
  })
  it('load heading', () => {
    cy.get('h1').contains('About me')
  })
  it('load, hover knowledge img', () => {
    cy.get('span.tooltip')
    cy.get('.img-container img:first').trigger('mouseover')
  })
})
