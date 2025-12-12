describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the homepage", () => {
    cy.get("header").should("be.visible");
  });

  it("should render product cards", () => {
    cy.get("img").its("length").should("be.greaterThan", 0);
  });
});
