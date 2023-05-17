import UploadSection from "./styled";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import UploadForm from "../../components/UploadForm";

const UploadPage = () => {
  const history = useHistory();

  return (
    <UploadSection>
      <UploadForm />
      <Button onClick={() => history.push("/list")}>Lista de Usuários</Button>
    </UploadSection>
  );
};

export default UploadPage;
