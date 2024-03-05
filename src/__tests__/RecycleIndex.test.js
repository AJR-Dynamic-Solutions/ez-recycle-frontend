import { render, screen } from "@testing-library/react";
import RecycleIndex from "../pages/RecycleIndex";
import { BrowserRouter } from "react-router-dom";
import mockRecycle from "../mockRecycle";

describe("<RecycleIndex />", () => {
  it("renders all recycles", () => {
    render(
      <BrowserRouter>
        <RecycleIndex recycles={mockRecycle} />
      </BrowserRouter>
    );

    mockRecycle.forEach((recycle) => {
      expect(screen.getByText(`$${recycle.price}`)).toBeInTheDocument();
      expect(
        screen.getByText(`${recycle.item}, ${recycle.city}, ${recycle.state}`)
      ).toBeInTheDocument();
    });
  });
});
