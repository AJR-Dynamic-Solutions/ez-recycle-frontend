import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
})

it("has clickable links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  userEvent.click(screen.getByText("Home"))
  expect(screen.getByText("Home")).toBeInTheDocument()

  userEvent.click(screen.getByText("View Current Items For Sale"))
  expect(screen.getByText("View Current Items For Sale")).toBeInTheDocument()

  userEvent.click(screen.getByText("My Listings"))
  expect(screen.getByText("My Listings")).toBeInTheDocument()

  userEvent.click(screen.getByText("Add Your Item For Sale"))
  expect(screen.getByText("Add Your Item For Sale")).toBeInTheDocument()

  userEvent.click(screen.getByText("Log Out"))
  expect(screen.getByText("Log Out")).toBeInTheDocument()
})