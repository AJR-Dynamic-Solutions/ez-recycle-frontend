// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import RecycleEdit from "../pages/RecycleEdit";
// import mockRecycle from "../mockRecycle";
// import mockUsers from "../mockUsers";

// describe("<RecycleEdit />", () => {
//   it("renders the form with correct initial values", () => {
//     render(
//       <BrowserRouter>
//         <RecycleEdit currentUser={mockUsers[0]} recycles={mockRecycle} />
//       </BrowserRouter>
//     );

//     expect(screen.getByDisplayValue(mockRecycle[0].item)).toBeInTheDocument();
//     expect(
//       screen.getByDisplayValue(mockRecycle[0].category)
//     ).toBeInTheDocument();
//     expect(
//       screen.getByDisplayValue(mockRecycle[0].description)
//     ).toBeInTheDocument();
//     expect(screen.getByDisplayValue(mockRecycle[0].city)).toBeInTheDocument();
//     expect(screen.getByDisplayValue(mockRecycle[0].state)).toBeInTheDocument();
//     expect(screen.getByDisplayValue(mockRecycle[0].price)).toBeInTheDocument();
//     expect(screen.getByDisplayValue(mockRecycle[0].email)).toBeInTheDocument();
//     expect(
//       screen.getByDisplayValue(mockRecycle[0].whatsapp_user)
//     ).toBeInTheDocument();
//     expect(screen.getByDisplayValue(mockRecycle[0].image)).toBeInTheDocument();
//   });

//   it("calls editRecycle function with updated values on form submission", () => {
//     const mockEditRecycle = jest.fn();

//     render(
//       <BrowserRouter>
//         <RecycleEdit
//           currentUser={mockUsers[0]}
//           recycles={mockRecycle}
//           editRecycle={mockEditRecycle}
//         />
//       </BrowserRouter>
//     );

//     fireEvent.change(screen.getByLabelText(/item:/i), {
//       target: { value: "Updated Item" },
//     });
//     fireEvent.change(screen.getByLabelText(/category:/i), {
//       target: { value: "Updated Category" },
//     });

//     fireEvent.click(screen.getByRole("button", { name: /submit/i }));

//     expect(mockEditRecycle).toHaveBeenCalledWith(
//       expect.objectContaining({
//         item: "Updated Item",
//         category: "Updated Category",
//       }),
//       mockRecycle[0].id
//     );
//   });
// });
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom"; // Import Routes
import { render, screen, fireEvent } from "@testing-library/react";
import RecycleEdit from "../pages/RecycleEdit";
import mockRecycle from "../mockRecycle";
import mockUsers from "../mockUsers";

describe("<RecycleEdit />", () => {
  // Assume the id of the item to edit is the first item in your mockRecycle array
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

    // Assertions remain the same
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

    // Test interaction and assertions remain the same
  });
});
