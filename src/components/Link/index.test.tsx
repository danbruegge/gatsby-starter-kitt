import React from "react";
import { render, screen } from "@testing-library/react";

import { Link } from ".";

describe("Should render Link", () => {
  test("with default options", () => {
    render(<Link to="http://example.tld">Hello</Link>);

    const link = screen.getByText("Hello");

    expect(link).toHaveAttribute("color", "light");
    expect(link).toHaveAttribute("href", "http://example.tld");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("with internal URL", () => {
    render(<Link to="/subpage">Subpage</Link>);

    const link = screen.getByText("Subpage");

    expect(link).toHaveAttribute("color", "light");
    expect(link).toHaveAttribute("href", "/subpage");
  });
});
