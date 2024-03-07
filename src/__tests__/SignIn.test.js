import React from "react";
import { render, screen, } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import "@testing-library/jest-dom";

describe("<SignIn />", () => {
  it("has a signIn form", () => {
    render(
      <BrowserRouter>
        <SignIn signIn={SignIn} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("textbox", { name: /email:/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(
      <BrowserRouter>
        <SignIn signIn={SignIn} />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
