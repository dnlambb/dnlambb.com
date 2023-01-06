describe('Visit Home EN Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Hi there')
    cy.contains('Daniel Cordero')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })
})
describe('Visit About EN Page', () => {
  it('successfully loads', () => {
    cy.visit('/about')
    cy.contains('developer')
    cy.title().should('include', 'Daniel Cordero • About me')
  })
})
describe('Visit Work EN Page', () => {
  it('successfully loads', () => {
    cy.visit('/work')
    cy.contains('Fylo Landing')
    cy.title().should('include', 'Daniel Cordero • Works')
  })
})
describe('Visit Home ES Page', () => {
  it('successfully loads', () => {
    cy.visit('/es')
    cy.contains('Daniel Cordero')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })
})
describe('Visit About ES Page', () => {
  it('successfully loads', () => {
    cy.visit('/es/about')
    cy.contains('desarrollador')
    cy.title().should('include', 'Daniel Cordero • Sobre mí')
  })
})
describe('Visit Work ES Page', () => {
  it('successfully loads', () => {
    cy.visit('/es/work')
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