import { render, screen } from "@testing-library/react";
import RecycleShow from "../pages/RecycleShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockRecycle from "../mockRecycle.js";

describe("<RecycleShow />", () => {
  test("renders one recycle", () => {
    const recycleId = "1";
    render(
      <MemoryRouter initialEntries={[`/RecycleShow/${recycleId}`]}>
        <Routes>
          <Route
            path="/RecycleShow/:id"
            element={<RecycleShow recycles={mockRecycle} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("$18")).toBeInTheDocument();
    expect(screen.getByText(/Assorted Weights/i)).toBeInTheDocument();
    expect(screen.getByText(/San Diego/i)).toBeInTheDocument();
    expect(screen.getByText(/California/i)).toBeInTheDocument();
    expect(screen.getByText("Email: allnatty@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp User: 42069696969")).toBeInTheDocument();
  });
});
