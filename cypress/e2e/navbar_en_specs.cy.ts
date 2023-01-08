describe('Testing Navbar Home Page', () => {
  it('visit home page', () => {
    cy.visit('/')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Home')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/#about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/#skills"]')
    cy.get('[href="/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})


describe('Testing Navbar Projects Page', () => {
  it('visit projects page', () => {
    cy.visit('/projects')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Projects')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/#about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/#skills"]')
    cy.get('[href="/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:first').click()
  })
})


describe('Testing Navbar Error(404) Page', () => {
  it('visit contact page', () => {
    cy.visit('/error')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Home')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/#about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/#skills"]')
    cy.get('[href="/#contact"]')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})