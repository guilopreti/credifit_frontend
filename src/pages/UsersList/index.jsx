import { useEffect, useState } from "react";
import axios from "axios";
import ListSection from "./styled";
import { useHistory } from "react-router-dom";

const UsersListPage = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((resp) => setUsersList(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const translations = {
    creator: "Criador(a)",
    affiliated: "Afiliado(a)",
  };

  const history = useHistory();

  return (
    <ListSection>
      <button onClick={() => history.push("/")}>Fazer Upload</button>

      <ul>
        {usersList.map((user) => {
          const totalValue = user.products.reduce(
            (prev, curr) => (prev += Number(curr.sum_of_sales)),
            0
          );

          return (
            <li>
              <p>
                Total acumulado pelas vendas{" "}
                {totalValue.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <table>
                <tr className="creator-line">
                  <td>{user.name}</td>
                  <td>{translations[user.type]}</td>
                </tr>
                {user.creatorAffiliates.map((affiliated) => {
                  return (
                    <tr className="affiliated-line">
                      <td>{affiliated.name}</td>
                      <td>{translations[affiliated.type]}</td>
                    </tr>
                  );
                })}
              </table>
            </li>
          );
        })}
      </ul>
    </ListSection>
  );
};

export default UsersListPage;
