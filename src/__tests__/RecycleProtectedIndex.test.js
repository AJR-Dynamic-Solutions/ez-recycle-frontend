import { render, screen } from "@testing-library/react";
import RecycleProtectedIndex from "../pages/RecycleProtectedIndex";
import { BrowserRouter } from "react-router-dom";

describe("<RecycleProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "test1@example.com",
    };

    const userRecycles = [
      {
        id: 1,
        item: "Assorted Weights",
        category: "Fitness",
        description: "Bulk assorted weights",
        price: "18",
        city: "San Diego",
        state: "CA",
        email: "allnatty@gmail.com",
        whatsapp_user: "42069696969",
        image:
          "https://images.offerup.com/P78QulFYsPKnKZC3aRJePAfNJqc=/250x333/photos/529c2fd36e864ecfbf67d239a7e57076.jpg",
        user_id: 1,
      },
    ];

    render(
      <BrowserRouter>
        <RecycleProtectedIndex
          recycles={userRecycles}
          currentUser={currentUser}
        />
      </BrowserRouter>
    );
  });

  it("renders without crashing", () => {
    const element = screen.getByText("My Listings");
    expect(element).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(
      <BrowserRouter>
        <RecycleProtectedIndex />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", { name: /edit listing/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /delete listing/i })
    ).toBeInTheDocument();
  });
});
