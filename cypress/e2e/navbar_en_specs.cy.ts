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
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})


describe('Testing Navbar About Page', () => {
  it('visit about page', () => {
    cy.visit('/about')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('About')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:first').click()
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
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:first').click()
  })
})


describe('Testing Navbar Education Page', () => {
  it('visit education page', () => {
    cy.visit('/education')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Education')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})


describe('Testing Navbar Contact Page', () => {
  it('visit contact page', () => {
    cy.visit('/education')
  })
  it('load brand-link', () => {
    cy.get('.brand-link').get('[href="/"]:first')
  })
  it('load navbar links', () => {
    cy.get('.list-links li a').contains('Contact')
  })
  it('load hrefs of links', () => {
    cy.get('[href="/"]')
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
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
    cy.get('[href="/about"]')
    cy.get('[href="/projects"]')
    cy.get('[href="/education"]')
    cy.get('[href="/contact"]')
  })
  it('hover navbar links', () => {
    cy.get('.list-links li a:first').trigger('mouseover')
  })
  it('click navbar links', () => {
    cy.get('.list-links li a:last').click()
  })
})