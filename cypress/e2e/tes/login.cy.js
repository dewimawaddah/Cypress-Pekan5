describe("do login", () => {
  it("redirected to dashboard page", () => {
    cy.visit("/");
    cy.url().should("include", "/login");

    const email = cy.get("#email");
    const password = cy.get("#password");
    const buttonLogin = cy.get("button").contains("login");

    email.type("dewitest@gmail.com");
    password.type("123456");
    buttonLogin.click();
    cy.url().should("include", "/dashboard");
  });
});
