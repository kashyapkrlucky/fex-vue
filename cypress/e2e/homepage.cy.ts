describe("Home Page", () => {
  it("shows translated welcome and description text", () => {
    cy.visit("/"); // visits http://localhost:5173

    // Check the heading contains the translated 'home.welcome'
    cy.get("h1").should("contain.text", "Welcome"); // adjust expected text as per your translation

    // Check the paragraph contains the translated 'home.description'
    cy.get("p").should(
      "contain.text",
      "This is the homepage of your template app."
    ); // adjust expected text as per your translation
  });
});
