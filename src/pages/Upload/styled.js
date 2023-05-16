import styled from "styled-components";

const UploadSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-bg);

  .upload-form-div {
    width: 90%;
    max-width: 550px;
  }

  .buttons-div {
    background-color: var(--grey-credifit);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
  }

  .file-input-div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      background-color: red;
      padding: 5px 8px;
      border-radius: 100%;
    }
  }

  h2 {
    text-align: center;
    background-color: var(--green-credifit);
    color: var(--white-fixed);
    padding: 5px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  label {
    background-color: var(--orange-credifit);
    color: var(--white-fixed);
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: var(--green-credifit);
    color: var(--white-fixed);
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
  }
`;

export default UploadSection;
