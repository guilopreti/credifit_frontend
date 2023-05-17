import { useRef, useState } from "react";
import axios from "axios";
import UploadSection from "./styled";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const UploadPage = () => {
  const [fileData, setFileData] = useState();
  const [fileName, setFileName] = useState();
  const fileInputRef = useRef(null);

  const handleFileUpload = (evt) => {
    const file = evt.target.files[0];
    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result;
      const lines = fileContent.split("\n");
      const objectData = {};

      lines.forEach((line, index) => {
        if (line !== "") {
          objectData[index] = line;
        }
      });

      setFileData(objectData);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const sendTransactions = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3001/", data)
      .then((resp) => {
        console.log(resp);
        handleClearFile();
        toast.success("Registros concluídos com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const handleClearFile = () => {
    setFileData(null);
    setFileName("");
    fileInputRef.current.value = null;
  };

  const history = useHistory();

  return (
    <UploadSection>
      <div className="upload-form-div">
        <h2>Upload de Arquivo</h2>

        <div className="buttons-div">
          <div className="file-input-div">
            <label htmlFor="fileInput">
              Selecionar
              <input
                id="fileInput"
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </label>
            {fileData && (
              <div>
                <span>{fileName}</span>
                <button onClick={handleClearFile}>X</button>
              </div>
            )}
          </div>

          <button onClick={() => sendTransactions(fileData)}>Enviar</button>
        </div>
      </div>

      <button onClick={() => history.push("/list")}>Lista de Usuários</button>
    </UploadSection>
  );
};

export default UploadPage;
