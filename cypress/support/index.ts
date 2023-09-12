/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to perform a login operation.
       * @example cy.login({ username: 'user', password: 'password' })
       */
      login(credentials: {
        username: string;
        password: string;
      }): Chainable<void>;

      /**
       * Custom command to add an item.
       * @example cy.addItem({ name: 'Item Name' })
       */
      addItem(item: { name: string }): Chainable<void>;
    }
  }
}
