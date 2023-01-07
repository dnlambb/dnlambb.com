describe('Testing Footer Home Page', () => {
  it('visit page', () => {
    cy.visit('/')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repository')
  })
  
  it('load message', () => {
    cy.get('.message-container').contains('Built by')
  })
  
  it('load heart', () => {
    cy.get('.heart-container')
    cy.get('.heart-stroke')
    cy.get('.heart-clip').trigger('mouseover').click()
  })

  it('load license', () => {
    cy.get('.license a').contains('BY-NC-SA').trigger('mouseover')
    cy.get('[href="http://creativecommons.org/licenses/by-nc-sa/4.0/"]')
  })
})


describe('Testing Footer Projects Page', () => {
  it('visit page', () => {
    cy.visit('/projects')
  })

  it('load repository', () => {
    cy.get('.link-card').contains('Repository')
  })
  
  it('load message', () => {
    cy.get('.message-container').contains('Built by')
  })
  
  it('load heart', () => {
    cy.get('.heart-container')
    cy.get('.heart-stroke')
    cy.get('.heart-clip').trigger('mouseover').click()
  })

  it('load license', () => {
    cy.get('.license a').contains('BY-NC-SA').trigger('mouseover')
    cy.get('[href="http://creativecommons.org/licenses/by-nc-sa/4.0/"]')
  })
})
