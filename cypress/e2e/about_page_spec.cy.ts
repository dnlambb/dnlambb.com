describe('Visit About EN Page', () => {
  it('visit page', () => {
    cy.visit('/about')
    cy.title().should('include', 'Daniel Cordero • About me')
  })
  it('load heading', () => {
    cy.get('h1').contains('About me')
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
})

describe('Visit About ES Page', () => {
  it('visit page', () => {
    cy.visit('/es/about')
    cy.title().should('include', 'Daniel Cordero • Sobre mí')
  })
  it('load heading', () => {
    cy.get('h1').contains('Sobre mí')
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
})
