import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import RecycleNew from "../pages/RecycleNew";
import mockUsers from "../mockUsers";

describe("<RecycleNew />", () => {
  it("renders the form", () => {
    render(
      <BrowserRouter>
        <RecycleNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    );
    expect(screen.getByText(/item:/i)).toBeInTheDocument();
    expect(screen.getByText(/category:/i)).toBeInTheDocument();
    expect(screen.getByText(/description:/i)).toBeInTheDocument();
    expect(screen.getByText(/price:/i)).toBeInTheDocument();
    expect(screen.getByText(/city:/i)).toBeInTheDocument();
    expect(screen.getByText(/state:/i)).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/whatsapp username:/i)).toBeInTheDocument();
    expect(screen.getByText(/image url:/i)).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(
      <BrowserRouter>
        <RecycleNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    );

    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
