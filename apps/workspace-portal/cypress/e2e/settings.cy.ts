describe("Settings Page", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("should load the settings page", () => {
    cy.contains("Settings").should("be.visible");
  });

  it("should show current theme", () => {
    cy.contains("Current Theme").should("be.visible");
  });

  it("should render Save button", () => {
    cy.contains("Save Settings").should("be.visible");
  });

  it("should click Save button", () => {
    cy.contains("Save Settings").click();
  });
});
