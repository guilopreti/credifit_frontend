import styled from "styled-components";

const ListSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-credifit);
  flex-direction: column;
  gap: 10px;
  color: var(--white-fixed);

  ul {
    width: 90%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p {
    text-align: center;
    background-color: var(--green-credifit);
    padding: 5px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border: 2px solid;
    }

    tr > td:first-child {
      width: 72%;
    }

    td {
      border: 2px solid #696969;
      padding: 5px;
    }
  }

  .creator-line {
    background-color: var(--orange-credifit);
  }

  .affiliated-line {
    background-color: var(--green-credifit);
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

export default ListSection;
