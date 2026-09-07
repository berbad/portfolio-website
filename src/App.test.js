import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { projects } from "./data";

beforeEach(() => {
  window.history.pushState({}, "", "/");
  window.scrollTo = jest.fn();

  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.IntersectionObserver = MockIntersectionObserver;
});

test("renders the portfolio content with accessible sections and canonical contact links", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: /berdason badel/i }),
  ).toBeInTheDocument();

  for (const page of ["Home", "Projects", "Mission", "About"]) {
    expect(screen.getByRole("link", { name: page })).toBeInTheDocument();
  }

  for (const project of projects) {
    expect(screen.getByText(project.title)).toBeInTheDocument();
  }

  const emailLinks = screen.getAllByRole("link", {
    name: /email|send an email|get in touch/i,
  });
  expect(emailLinks.length).toBeGreaterThan(0);
  for (const link of emailLinks) {
    expect(link).toHaveAttribute("href", "mailto:berbad21@gmail.com");
  }
});

test("navigates between portfolio pages without leaving the app shell", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("link", { name: "Projects" }));
  expect(screen.getByRole("heading", { level: 1, name: "Projects" })).toBeInTheDocument();
  expect(window.location.pathname).toBe("/projects");

  fireEvent.click(screen.getByRole("link", { name: "Mission" }));
  expect(screen.getByRole("heading", { level: 1, name: /make useful software/i })).toBeInTheDocument();
  expect(window.location.pathname).toBe("/mission");
});

test("resets scrolling instantly after the destination page renders", () => {
  render(<App />);
  window.scrollTo.mockClear();
  const headingsAtScroll = [];
  window.scrollTo.mockImplementation(() => {
    headingsAtScroll.push(screen.getByRole("heading", { level: 1 }).textContent);
  });

  fireEvent.click(screen.getByRole("link", { name: "Projects" }));

  expect(headingsAtScroll).toEqual(["Projects"]);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
});
