import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RecycleEdit from "../pages/RecycleEdit";
import mockRecycle from "../mockRecycle";
import mockUsers from "../mockUsers";

describe("<RecycleEdit />", () => {
  const recycleToEditId = mockRecycle[0].id;

  it("renders the form with correct initial values", () => {
    render(
      <MemoryRouter initialEntries={[`/editRecycle/${recycleToEditId}`]}>
        <Routes>
          <Route
            path="/editRecycle/:id"
            element={
              <RecycleEdit currentUser={mockUsers[0]} recycles={mockRecycle} />
            }
          />
        </Routes>
      </MemoryRouter>
    );

  });

  it("calls editRecycle function with updated values on form submission", () => {
    const mockEditRecycle = jest.fn();

    render(
      <MemoryRouter initialEntries={[`/editRecycle/${recycleToEditId}`]}>
        <Routes>
          <Route
            path="/editRecycle/:id"
            element={
              <RecycleEdit
                currentUser={mockUsers[0]}
                recycles={mockRecycle}
                editRecycle={mockEditRecycle}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
  });
});
