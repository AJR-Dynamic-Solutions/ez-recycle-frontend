import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

describe("<NotFound />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const indexLink = screen.getByText(
      "We couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable"
    );
    expect(indexLink).toBeInTheDocument();
  });
});
