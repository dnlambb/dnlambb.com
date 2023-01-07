describe("Visit Projects EN Page", () => {
  it("visit page", () => {
    cy.visit("/projects");
    cy.title().should('include', 'Daniel Cordero • Projects')
  });

  it("load heading", () => {
    cy.get("h1").contains("Projects");
  });

  it("load card project", () => {
    cy.get(".card-project").contains("Fylo");
  });

  it('find broken links button', () => {
    cy.get('.button-primary').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
    })
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
});

describe("Visit Projects ES Page", () => {
  it("visit page", () => {
    cy.visit("/es/projects");
    cy.title().should('include', 'Daniel Cordero • Proyectos')
  });

  it("load heading", () => {
    cy.get("h1").contains("Proyectos");
  });

  it("load card project", () => {
    cy.get(".card-project").contains("Fylo");
  });

  it('find broken links button', () => {
    cy.get('.button-primary').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
    })
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
});
