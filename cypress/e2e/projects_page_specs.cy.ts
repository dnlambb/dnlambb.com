describe("Visit Projects Page", () => {
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

  it("load btn code", () => {
    cy.get(".button-primary");
    cy.get('[href="https://github.com/dnlambb/fylo-landing-page"]');
  });

  it("load btn web", () => {
    cy.get(".button-primary");
    cy.get('[href="https://dnlambb.github.io/fylo-landing-page/"]');
  });

  it("load btn more projects", () => {
    cy.get(".button-primary");
    cy.get('[href="https://github.com/dnlambb?tab=repositories"]');
  });

  it("load footer", () => {
    cy.get(".license a");
    cy.get('[href="http://creativecommons.org/licenses/by-nc-sa/4.0/"]');
  });
});
