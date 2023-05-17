import StyledList from "./styled";

const List = ({ users }) => {
  const translations = {
    creator: "Criador(a)",
    affiliated: "Afiliado(a)",
  };

  return (
    <StyledList>
      {users.map((user) => {
        const totalValue = user.products.reduce(
          (prev, curr) => (prev += Number(curr.sum_of_sales)),
          0
        );

        return (
          <li key={user.id}>
            <p>
              Total acumulado pelas vendas:{" "}
              {totalValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <table>
              <tbody>
                <tr className="creator-line">
                  <td>{user.name}</td>
                  <td>{translations[user.type]}</td>
                </tr>
                {user.creatorAffiliates.map((affiliated) => {
                  return (
                    <tr className="affiliated-line" key={affiliated.id}>
                      <td>{affiliated.name}</td>
                      <td>{translations[affiliated.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </li>
        );
      })}
    </StyledList>
  );
};

export default List;
