# Shop

![](https://skillicons.dev/icons?i=react,ts,vite,redux)

This is a simple shop application that leverages `Redux`, `React Query`, and `React Router` for state management, data fetching, and navigation, respectively. It also incorporates local storage for token-based authentication, basic `TypeScript` type definitions, simple testing with `Vitest` and basic integration testing with `Cypress`.

## Instructions

### Installation

1. Clone this repository to your local machine and navigate to the project directory:

   ```bash
   git clone git@github.com:dazfz/shop.git
   cd shop
   rm -rf .git
   ```

1. Install the required dependencies by running:

   ```bash
   npm install
   ```

### Running the Application

#### Starting the Server

To start the server, use the following command:

```bash
npm run server
```

#### Running the Frontend

To run the frontend, use the following command:

```bash
npm run dev
```

#### Running Vitest Tests

You can run tests using the following command:

```bash
npm test
```

#### Running Cypress Integration Tests

##### Cypress

To perform Cypress integration tests, open the Cypress test runner with the following command:

```bash
npm run cypress:open
```

##### Running Cypress Tests in the Command Line

You can also run Cypress tests in the command line with the following command:

```bash
npm run test:e2e
```

## Features

### Types

Basic type definitions using enums, omit, etc. are located in the `types` folder.

In `components/ItemPage.tsx`, there's a switch case based on the `kind` attribute. Additionally, in `services/itemService.tsx`, `Axios` requires proper type annotations to function (and error handling).

### Token and Local Storage

- In `services/itemService.tsx`, tokens are set, and there's an authentication process for creating new items.
- In `reducers/userReducer.ts`, user information is retrieved from local storage if available.
- In `components/Login.tsx`, user data is saved to local storage and tokens are set after successful login. The user information is also stored in the user reducer.
- In `components/Account.tsx`, you can view user data and log out (clearing the reducer and local storage).

#### Packages Used

- axios

### Redux

In the `reducers` folder, there are three different reducers: `cartReducer` for managing the cart, `userReducer` for user-related actions (both using Redux Toolkit), and `filterReducer` for filtering using pure Redux.

There's also a `store.ts` file that uses local storage to save the reducer state and retrieve it. `configureStore` is used to provide the store in `main.tsx`. TypeScript types and custom hooks for `useDispatch` and `useSelect` are provided in `hooks/hook.ts`.

- `components/Cart.tsx` utilizes `filterReducer` and `cartReducer`.
- `components/ItemList.tsx` uses `cartReducer` to add items to the cart.
- `components/VisibilityFilter.tsx` interacts with the `filterReducer`.

#### Packages Used:

- redux
- react-redux
- @reduxjs/toolkit

### React Query

The `services/itemQuery.tsx` file makes use of React Query and contains two functions: one for fetching all items and another for adding new items. Both functions rely on `services/itemService.tsx` functions.

- `components/ItemForm.tsx` utilizes the mutation function to create a new item.
- `Router.tsx` uses the other function to fetch all items and pass them to other components.

#### Packages Used:

- @tanstack/react-query

### React Router

In `Router.tsx`, routes are defined using `<Route>`. Path elements can be parameterized, e.g., `items/:id`, with the `useMatch()` hook for matching. Conditional routing using `<Navigate/>` is demonstrated to direct users to either the account page or the login page depending on their authentication status. Many components use the `useNavigate` hook for navigation.

In `main.tsx`, an example of nesting providers is shown, starting with Redux, then React Query, and finally, React Router.

```jsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouterComponent />
      </Router>
    </QueryClientProvider>
  </Provider>
);
```

#### Packages Used:

- react-router-dom

### Custom Hooks

In `hooks/index.ts`, there's a custom hook for forms with a reset function. This hook is used in `components/ItemForm.tsx`.

## Development Packages

- `JSON-server` for testing CRUD operations and REST API.
- `TypeScript` and TypeScript types.
- `Vitest` for testing, which is similar to Jest and easier to configure.
- Testing libraries for Vitest.
- `Cypress` for integration testing.
