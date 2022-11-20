describe('Visit Contact Page', () => {
  it('visit page', () => {
    cy.visit('/contact')
    cy.title().should('include', 'Daniel Cordero • Contact')
  })
  it('load heading', () => {
    cy.get('h1').contains('Contact')
  })
  it('load social networks', () => {
    cy.get('span.tooltip')
    cy.get('.contact-list span li a')
    cy.get('[src="/assets/social/email.svg"]')
  })
  it('hover social networks', () => {
    cy.get('.contact-list span li a:first').trigger('mouseover')
  })
})