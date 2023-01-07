describe('Visit Home EN Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Daniel Cordero')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })
})
describe('Visit Projects EN Page', () => {
  it('successfully loads', () => {
    cy.visit('/projects')
    cy.contains('Fylo Landing')
    cy.title().should('include', 'Daniel Cordero • Projects')
  })
})
describe('Visit Home ES Page', () => {
  it('successfully loads', () => {
    cy.visit('/es')
    cy.contains('Daniel Cordero')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })
})
describe('Visit Projects ES Page', () => {
  it('successfully loads', () => {
    cy.visit('/es/projects')
    cy.contains('Fylo Landing')
    cy.title().should('include', 'Daniel Cordero • Proyectos')
  })
})
describe('Visit Error(404) Page', () => {
  it('successfully loads', () => {
    cy.visit('/error')
    cy.contains('404')
    cy.title().should('include', '404 Page not found')
  })
})