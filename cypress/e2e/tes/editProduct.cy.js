describe("User mengedit item", () => {
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

  it("User mengedit item", () => {
    const buttonMenuProduk = cy.get('a[href="/products"]');
    buttonMenuProduk.click();
    const buttonTitik = cy.get("tr > td:nth-child(10) > button");
    buttonTitik.click();
    cy.get(".css-13c7rae").contains("ubah").click();
    const kategori = cy.get("#kategori");
    kategori.click();
    cy.get("table").contains("Umum").click();
    const buttonSimpan = cy.get("button").contains("simpan");
    buttonSimpan.click();
    cy.url().should("include", "/products");
    cy.get(".css-tidvy5").should("have.text", "success");
    cy.get(".css-zycdy9").should("have.text", "item diubah");
  });
});
