import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, test, expect } from "vitest";
import { myAppRoutes } from "./src/routes";

describe("Customer Portal Integration Test", () => {
  test("comprehensive flow: async loading, navigation, and interaction", async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter(myAppRoutes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={testRouter} />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    const emailElement = await screen.findByText("omar@yahoo.com");
    expect(emailElement).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", { name: /go to about/i });
    await user.click(aboutLink);

    expect(
      screen.getByRole("heading", { name: /about us/i }),
    ).toBeInTheDocument();

    expect(screen.queryByText(/loading.../i)).toBeNull();

    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    await user.click(incrementBtn);

    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });
});
