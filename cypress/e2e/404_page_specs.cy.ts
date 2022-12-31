describe('Testing Error Page', () => {
  it('visit page', () => {
    cy.visit('/error')
  })

  it('load heading', () => {
    cy.get('h1').contains('404')
  })

  it('load message', () => {
    cy.get('h2').contains('It seems')
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

  it('click btn go home', () => {
    cy.get('a.button-primary').click()
    .request({
      url: '/',
      failOnStatusCode: false
    })
    cy.title().should('include', 'Daniel Cordero • @dnlambb')
  })

})
