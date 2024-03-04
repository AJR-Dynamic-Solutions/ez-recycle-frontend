import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("renders a footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});