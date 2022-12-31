describe('Visit Education EN Page', () => {
  it('visit page', () => {
    cy.visit('/education')
    cy.title().should('include', 'Daniel Cordero • Education')
  })
  it('load heading', () => {
    cy.get('h1').contains('Education')
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

describe('Visit Education ES Page', () => {
  it('visit page', () => {
    cy.visit('/es/education')
    cy.title().should('include', 'Daniel Cordero • Educación')
  })
  it('load heading', () => {
    cy.get('h1').contains('Educación')
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