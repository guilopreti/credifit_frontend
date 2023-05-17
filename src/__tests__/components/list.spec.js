import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../../components/List";

const users = [
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

describe("List component test", () => {
  test("should be able to render a list", () => {
    render(<List users={users} />);

    const creator = screen.getByText(/Guilherme Lopreti/i);

    expect(screen.getByRole("list")).toBeTruthy();
    expect(creator).toBeTruthy();
  });
});
