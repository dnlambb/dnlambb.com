describe('Visit About EN Page', () => {
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

describe('Visit About ES Page', () => {
  it('visit page', () => {
    cy.visit('/es/about')
    cy.title().should('include', 'Daniel Cordero • Sobre mí')
  })
  it('load heading', () => {
    cy.get('h1').contains('Sobre mí')
  })
  it('load, hover knowledge img', () => {
    cy.get('span.tooltip')
    cy.get('.img-container img:first').trigger('mouseover')
  })
})
