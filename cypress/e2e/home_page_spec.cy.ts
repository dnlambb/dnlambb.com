describe('Visit Home EN Page', () => {
  it('visit page', () => {
    cy.visit('/')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })

  it('load heading', () => {
    cy.get('h1').contains('Daniel Cordero')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repository').trigger('mouseover')
    cy.get('[href="https://github.com/dnlambb/dnlambb.com"]')
  })
})

describe('Visit Home ES Page', () => {
  it('visit page', () => {
    cy.visit('/es')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })

  it('load heading', () => {
    cy.get('h1').contains('Daniel Cordero')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repositorio').trigger('mouseover')
    cy.get('[href="https://github.com/dnlambb/dnlambb.com"]')
  })
})
