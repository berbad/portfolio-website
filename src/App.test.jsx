import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";
import { projects } from "./data";

beforeEach(() => {
  window.history.pushState({}, "", "/");
  window.scrollTo = vi.fn();

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
  expect(
    screen.getByRole("heading", { level: 1, name: "Projects" }),
  ).toBeInTheDocument();
  expect(window.location.pathname).toBe("/projects");

  fireEvent.click(screen.getByRole("link", { name: "Mission" }));
  expect(
    screen.getByRole("heading", { level: 1, name: /make useful software/i }),
  ).toBeInTheDocument();
  expect(window.location.pathname).toBe("/mission");
});

test("resets scrolling instantly after the destination page renders", () => {
  render(<App />);
  window.scrollTo.mockClear();
  const headingsAtScroll = [];
  window.scrollTo.mockImplementation(() => {
    headingsAtScroll.push(
      screen.getByRole("heading", { level: 1 }).textContent,
    );
  });

  fireEvent.click(screen.getByRole("link", { name: "Projects" }));

  expect(headingsAtScroll).toEqual(["Projects"]);
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: "instant",
  });
});

test("mobile navigation can be dismissed with Escape", () => {
  render(<App />);
  const toggle = screen.getByRole("button", {
    name: /toggle navigation menu/i,
  });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("home project cards link to live sites with separate GitHub links", () => {
  render(<App />);

  for (const project of projects) {
    const card = screen.getByRole("article", { name: project.title });
    const primaryLink = within(card).getByRole("link", { name: project.title });
    const githubLink = within(card).getByRole("link", {
      name: `GitHub for ${project.title}`,
    });
    expect(primaryLink).toHaveAttribute("href", project.live || project.github);
    expect(primaryLink).toHaveAttribute(
      "aria-describedby",
      `project-summary-${project.id}`,
    );
    expect(primaryLink).toHaveAccessibleDescription(project.description);
    if (project.logo) {
      expect(primaryLink.querySelector("img")).toHaveAttribute("src", project.logo);
      expect(primaryLink.querySelector("img")).toHaveAttribute("alt", "");
    }
    expect(githubLink).toHaveAttribute("href", project.github);
    expect(primaryLink).not.toContainElement(githubLink);
    expect(within(card).queryByRole("img")).not.toBeInTheDocument();
  }

  fireEvent.click(screen.getByRole("link", { name: "View all projects" }));
  for (const project of projects) {
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByAltText(project.imageAlt)).toBeInTheDocument();
  }
});
