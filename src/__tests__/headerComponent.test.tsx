import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import HeaderComponent from "../components/HeaderComponent";

test("render header", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  render(<HeaderComponent />);

  const title = screen.getByRole("heading");
  const button = screen.getByRole("button");
  const darkMode = localStorage.setItem("darkMode", "true");

  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  user.click(button);
  console.log(darkMode);
});
