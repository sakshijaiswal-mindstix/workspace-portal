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

//   it("should open modal when Add to Cart clicked", () => {
//     cy.get("button").first().click();
//     cy.get('[role="presentation"], .MuiModal-root').should("be.visible");
//   });
});
