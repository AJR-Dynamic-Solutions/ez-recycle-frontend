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
    expect(
      screen.getByText(/Assorted Weights.*San Diego.*California/i)
    ).toBeInTheDocument();

    const contactElements = screen.getAllByText(
      (content, element) =>
        /allnatty@gmail\.com\s*42069696969/i.test(content) ||
        (element.textContent &&
          /allnatty@gmail\.com\s*42069696969/i.test(element.textContent))
    );
    expect(contactElements.length).toBeGreaterThanOrEqual(1);
  });
});
