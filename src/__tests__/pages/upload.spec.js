import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UploadPage from "../../pages/Upload";

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("Upload Page", () => {
  test("should be able to go to the list page", async () => {
    render(<UploadPage />);

    fireEvent.click(screen.getByRole("button", { name: /Lista de Usuários/i }));

    await waitFor(() => {
      expect(mockHistory).toHaveBeenCalled();
    });
  });
});
