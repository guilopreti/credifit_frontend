import { useEffect, useState } from "react";
import axios from "axios";
import ListSection from "./styled";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import List from "../../components/List";

const UsersListPage = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((resp) => setUsersList(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();

  return (
    <ListSection>
      <Button onClick={() => history.push("/")}>Fazer Upload</Button>
      <List users={usersList} />
    </ListSection>
  );
};

export default UsersListPage;
