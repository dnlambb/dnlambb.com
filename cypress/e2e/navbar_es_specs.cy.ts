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
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/education"]')
    cy.get('[href="/es/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
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
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/education"]')
    cy.get('[href="/es/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:last').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})

describe('Testing Navbar Projects ES Page', () => {
  it('visit projects page', () => {
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
    cy.get('[href="/es/about"]')
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/education"]')
    cy.get('[href="/es/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:last').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})

describe('Testing Navbar Contact ES Page', () => {
  it('visit contact page', () => {
    cy.visit('/es/contact')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/es"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Contacto')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/es"]')
    cy.get('[href="/es/about"]')
    cy.get('[href="/es/projects"]')
    cy.get('[href="/es/education"]')
    cy.get('[href="/es/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:last').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})