import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, test, expect } from "vitest";
import { myAppRoutes } from "./src/routes";

describe("Customer Portal Integration Test", () => {
  test("comprehensive flow: async loading, navigation, and interaction", async () => {
    // Setup user event
    const user = userEvent.setup();

    // Task 2: Render the Application
    const testRouter = createMemoryRouter(myAppRoutes, {
      initialEntries: ["/"], // Start at Home
    });

    render(<RouterProvider router={testRouter} />);

    // Task 3: Test the Async API
    // 1. Assert Loading is visible
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // 2. Wait for API and assert fake email appears (using findBy)
    const emailElement = await screen.findByText("omar@yahoo.com");
    expect(emailElement).toBeInTheDocument();

    // Task 4: Test Navigation
    // 1. Find link by Role and click it
    const aboutLink = screen.getByRole("link", { name: /go to about/i });
    await user.click(aboutLink);

    // 2. Assert navigation success (Heading "About Us")
    expect(
      screen.getByRole("heading", { name: /about us/i }),
    ).toBeInTheDocument();

    // 3. Prove old page is gone (Loading is null)
    expect(screen.queryByText(/loading.../i)).toBeNull();

    // Task 5: Test User Interaction
    // 1. Find Increment button by Role
    const incrementBtn = screen.getByRole("button", { name: /increment/i });

    // 2. Click it
    await user.click(incrementBtn);

    // 3. Assert count text appears
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });
});
