import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemPage from "../components/ItemPage";
import { Category, ItemOther } from "../types/ItemTypes";
import { User } from "../types/UserTypes";

test("renders item", () => {
  const user: User = {
    id: 9999,
    username: "test",
    password: "test",
  };
  const item: ItemOther = {
    id: 9999,
    name: "test",
    quantity: 10,
    seller: user,
    kind: Category.OTHER,
  };

  render(<ItemPage item={item} />);

  const element = screen.getByText("test");

  screen.debug(element);

  expect(element).toBeDefined();
});
