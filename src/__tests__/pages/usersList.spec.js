import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UsersListPage from "../../pages/UsersList";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const apiMock = new MockAdapter(
  axios.create({
    baseURL: "http://localhost:3001/",
  })
);

const usersList = [
  {
    id: 1,
    name: "Guilherme Lopreti",
    balance: "300",
    type: "creator",
    creatorAffiliates: [
      {
        id: 2,
        name: "Pedro Silva",
        balance: "100",
        type: "affiliated",
      },
    ],
    products: [
      {
        id: 1,
        name: "Criando Testes",
        sum_of_sales: "400",
        value: "200",
      },
    ],
  },
];

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("Users List Page", () => {
  test("should be able to go to the upload page", async () => {
    apiMock.onGet("users").replyOnce(200, usersList);

    await render(<UsersListPage />);

    fireEvent.click(screen.getByRole("button", { name: /Fazer Upload/i }));

    await waitFor(() => {
      expect(mockHistory).toHaveBeenCalled();
    });
  });
});
