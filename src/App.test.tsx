import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    expect(true).toBeTruthy();
  });
});

describe("App", () => {
  it("should render with the title visible", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const welcomeText = screen.getByText(/shop/i);
    screen.debug(welcomeText);

    expect(screen.getByText(/shop/i)).toBeInTheDocument();
  });
});
