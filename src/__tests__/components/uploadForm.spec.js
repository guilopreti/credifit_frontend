import React from "react";
import { render, screen } from "@testing-library/react";
import UploadForm from "../../components/UploadForm";

describe("Upload Form component test", () => {
  test("should be able to render the upload form", () => {
    render(<UploadForm />);

    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
