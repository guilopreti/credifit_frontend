import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button component test", () => {
  test("should be able to render a button", () => {
    render(<Button>Teste</Button>);

    expect(screen.getByRole("button", { name: /Teste/i })).toBeTruthy();
  });
});
