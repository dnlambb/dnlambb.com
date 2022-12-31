describe('Visit Contact EN Page', () => {
  it('visit page', () => {
    cy.visit('/contact')
    cy.title().should('include', 'Daniel Cordero • Contact')
  })
  it('load heading', () => {
    cy.get('h1').contains("Let's talk?")
  })
  it('load tooltip', () => {
    cy.get('.tooltip__text')
  })
  it('find broken links', () => {
    cy.get('a').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
    })
  })
  it('find broken src image', () => {
    cy.get('img').each(src => {
      if (src.prop('src'))
        cy.request({
          url: src.prop('src'),
          failOnStatusCode: false
        })
    })
  })
  it('find img not visible', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })
})
describe('Visit Contact ES Page', () => {
  it('visit page', () => {
    cy.visit('/es/contact')
    cy.title().should('include', 'Daniel Cordero • Contacto')
  })
  it('load heading', () => {
    cy.get('h1').contains('¿Hablemos?')
  })
  it('load tooltip', () => {
    cy.get('.tooltip__text')
  })
  it('find broken links', () => {
    cy.get('a').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
    })
  })
  it('find broken src image', () => {
    cy.get('img').each(src => {
      if (src.prop('src'))
        cy.request({
          url: src.prop('src'),
          failOnStatusCode: false
        })
    })
  })
  it('find img not visible', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })
})