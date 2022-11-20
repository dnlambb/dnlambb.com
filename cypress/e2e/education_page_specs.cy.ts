describe('Visit Education Page', () => {
  it('visit page', () => {
    cy.visit('/education')
    cy.title().should('include', 'Daniel Cordero • Education')
  })
  it('load heading', () => {
    cy.get('h1').contains('Education')
  })
  it('load navbar', () => {
    cy.get('.list-links li a').contains('Education')
    cy.get('[href="/education"]')
  })
  it('load education card', () => {
    cy.get('.education-card').contains('Inacap').get('img')
    cy.get('[src="/assets/education/inacap.png"]')
  })
})