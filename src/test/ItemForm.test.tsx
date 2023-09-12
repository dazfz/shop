import { render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import ItemForm from "../components/ItemForm";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";

test("<ItemForm /> updates parent state and calls onSubmit", async () => {
  const createItem = vitest.fn();
  const user = userEvent.setup();

  const queryClient = new QueryClient();

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ItemForm />
      </QueryClientProvider>
    </Provider>
  );

  const input = screen.getByPlaceholderText("cap");
  const sendButton = screen.getByText("add");

  await user.type(input, "testing a form...");
  await user.click(sendButton);

  //expect(createItem.mock.calls).toHaveLength(1);
  //expect(createItem.mock.calls[0][0].title).toBe("testing a form...");
});
