describe('Testing Navbar Home ES Page', () => {
  it('visit home page', () => {
    cy.visit('/es')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Home')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/about"]')
    cy.get('[href="/es/work"]')
    cy.get('[href="/es/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})

describe('Testing Navbar About ES Page', () => {
  it('visit about page', () => {
    cy.visit('/es/about')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Sobre')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/about"]')
    cy.get('[href="/es/work"]')
    cy.get('[href="/es/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})

describe('Testing Navbar Work ES Page', () => {
  it('visit work page', () => {
    cy.visit('/es/work')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Proyectos')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/about"]')
    cy.get('[href="/es/work"]')
    cy.get('[href="/es/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})
