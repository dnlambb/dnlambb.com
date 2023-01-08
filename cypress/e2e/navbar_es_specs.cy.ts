describe('Testing Navbar Home ES Page', () => {
  it('visit home page', () => {
    cy.visit('/es')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Inicio')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/#about"]')
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/#skills"]')
    cy.get('[href="/es/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})


describe('Testing Navbar Projects ES Page', () => {
  it('visit work page', () => {
    cy.visit('/es/projects')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Proyectos')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/#about"]')
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/#skills"]')
    cy.get('[href="/es/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})
