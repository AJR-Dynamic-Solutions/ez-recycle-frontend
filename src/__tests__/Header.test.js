import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

expect.extend({ toBeInTheDocument });

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header currentUser={true} />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view current items for sale/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /My Listings/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /add your item for sale/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("link", { name: /log out/i })).toBeInTheDocument();
  });
});
