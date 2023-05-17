import styled from "styled-components";

const StyledList = styled.ul`
  width: 90%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 15px;

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
`;

export default StyledList;
