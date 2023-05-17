import { Switch, Route } from "react-router-dom";
import UploadPage from "../pages/Upload";
import UsersListPage from "../pages/UsersList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <UploadPage />
      </Route>
      <Route path={"/list"}>
        <UsersListPage />
      </Route>
    </Switch>
  );
};

export default Routes;
