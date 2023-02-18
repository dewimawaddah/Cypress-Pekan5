describe("add product", () => {
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

  it("User menambahkan produk", () => {
    const buttonMenuProduk = cy.get('a[href="/products"]');
    buttonMenuProduk.click();
    cy.url().should("include", "/products");
    const buttonTambah = cy.get('a[href="/products/create"]');
    buttonTambah.click();
    cy.url().should("include", "/products/create");
    const nama = cy.get("#nama");
    const deskripsi = cy.get("#deskripsi");
    const hargaBeli = cy.get("#harga\\ beli");
    const hargaJual = cy.get("#harga\\ jual");
    const stok = cy.get("#stok");
    const kategori = cy.get("#kategori");
    const buttonSimpan = cy.get("button").contains("simpan");

    nama.type("Minyak");
    deskripsi.type("Minyak Premium");
    hargaBeli.type("10000");
    hargaJual.type("13000");
    stok.type("20").clear().type(20);
    kategori.click();
    cy.get("table").contains("Umum").click();
    buttonSimpan.click();
    cy.url().should("include", "/products");
    cy.get(".css-tidvy5").should("have.text", "success");
    cy.get(".css-zycdy9").should("have.text", "item ditambahkan");
  });

  it("User menginput harga beli >= harga jual", () => {
    cy.url().should("include", "/products");
    const buttonTambah = cy.get('a[href="/products/create"]');
    buttonTambah.click();
    cy.url().should("include", "/products/create");
    const nama = cy.get("#nama");
    const deskripsi = cy.get("#deskripsi");
    const hargaBeli = cy.get("#harga\\ beli");
    const hargaJual = cy.get("#harga\\ jual");
    const stok = cy.get("#stok");
    const kategori = cy.get("#kategori");
    const buttonSimpan = cy.get("button").contains("simpan");

    nama.type("Minyak");
    deskripsi.type("Minyak Premium");
    hargaBeli.type("10000");
    hargaJual.type("8000");
    stok.type("20").clear().type(20);
    kategori.click();
    cy.get("table").contains("Sembako").click();
    buttonSimpan.click();
    cy.get(".css-qwanz3").should("have.text", '"price" must be greater than ref:cost');
  });
});
