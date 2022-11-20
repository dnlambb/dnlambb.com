describe('Visit Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Daniel Cordero')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })
})
describe('Visit About Page', () => {
  it('successfully loads', () => {
    cy.visit('/about')
    cy.contains('Chile')
    cy.title().should('include', 'Daniel Cordero • About me')
  })
})
describe('Visit Projects Page', () => {
  it('successfully loads', () => {
    cy.visit('/projects')
    cy.contains('Fylo Landing')
    cy.title().should('include', 'Daniel Cordero • Projects')
  })
})
describe('Visit Education Page', () => {
  it('successfully loads', () => {
    cy.visit('/education')
    cy.contains('studied')
    cy.title().should('include', 'Daniel Cordero • Education')
  })
})
describe('Visit Contact Page', () => {
  it('successfully loads', () => {
    cy.visit('/contact')
    cy.contains('I prefer')
    cy.title().should('include', 'Daniel Cordero • Contact')
  })
})
describe('Visit Error(404) Page', () => {
  it('successfully loads', () => {
    cy.visit('/error')
    cy.contains('404')
    cy.title().should('include', '404 Page not found')
  })
})
