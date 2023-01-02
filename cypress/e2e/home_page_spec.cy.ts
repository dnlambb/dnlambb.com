describe('Test Home EN Page', () => {
  it('visit page', () => {
    cy.visit('/')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })

  it('load heading', () => {
    cy.get('h1').contains('Daniel Cordero')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repository')
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

  it('find img not visible', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })

  it('find broken background image projects', () => {
    cy.get('.card-project:first')
      .should('have.css', 'background')
      .and('include', '/assets/projects/github-user-search.png')
    cy.get('.card-project:last')
      .should('have.css', 'background')
      .and('include', '/assets/projects/fylo-landing.jpg')
  })
})


describe('Test Home ES Page', () => {
  it('visit page', () => {
    cy.visit('/es')
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })

  it('load heading', () => {
    cy.get('h1').contains('Daniel Cordero')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repositorio')
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

  it('find img not visible', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })

  it('find broken background image projects', () => {
    cy.get('.card-project:first')
      .should('have.css', 'background')
      .and('include', '/assets/projects/github-user-search.png')
    cy.get('.card-project:last')
      .should('have.css', 'background')
      .and('include', '/assets/projects/fylo-landing.jpg')
  })
})
