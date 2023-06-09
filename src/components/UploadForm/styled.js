import styled from "styled-components";

const StyledUploadForm = styled.div`
  width: 90%;
  max-width: 550px;

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

  label:hover {
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

export default StyledUploadForm;
