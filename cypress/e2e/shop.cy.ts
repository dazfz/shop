describe("shop", () => {
  beforeEach(function () {
    cy.request("GET", `${Cypress.env("BACKEND")}/users`);
    const user = {
      id: 9999,
      username: "test",
      password: "test",
    };
    //cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);
    cy.visit("");
  });

  it("front page can be opened", () => {
    cy.contains("shop");
  });

  it("login form can be opened", function () {
    cy.contains("account").click();
    cy.get("#username").type("test");
    cy.get("#password").type("test");
    cy.get("#login-button").click();
    cy.contains("test");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.login({ username: "test", password: "test" });
    });

    it("a new item can be created", function () {
      cy.contains("items").click();
      cy.get("input").type("test");
      cy.contains("create").click();
      cy.contains("test");
    });

    describe("and items exists", function () {
      beforeEach(function () {
        cy.addItem({
          name: "first item",
        });
        cy.addItem({
          name: "second item",
        });
        cy.addItem({
          name: "third item",
        });
      });

      it("one of those can be added to cart", function () {
        cy.contains("items").click();
        cy.contains("second item").parent().find("button").as("theButton");
        cy.get("@theButton").click();
        cy.get("@theButton").should("contain", "add");
        cy.contains("back").click();
        cy.contains("cart").click();
        cy.contains("second item");
        cy.contains("-").click();
        cy.contains("second item").should("not.exist");
      });
    });
  });
});
