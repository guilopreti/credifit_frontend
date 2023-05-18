import StyledUploadForm from "./styled";
import Button from "../Button";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const UploadForm = () => {
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

  const handleClearFile = () => {
    setFileData(null);
    setFileName("");
    fileInputRef.current.value = null;
  };

  const sendTransactions = (data) => {
    if (!data) {
      return toast.error("Selecione um arquivo!");
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/`, data)
      .then((_) => {
        handleClearFile();
        toast.success("Registros concluídos com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledUploadForm>
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
              <Button onClick={handleClearFile}>X</Button>
            </div>
          )}
        </div>

        <Button onClick={() => sendTransactions(fileData)}>Enviar</Button>
      </div>
    </StyledUploadForm>
  );
};

export default UploadForm;
