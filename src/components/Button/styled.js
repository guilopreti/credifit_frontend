import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--green-credifit);
  color: var(--white-fixed);
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(75%);
    transition: 0.3s;
  }
`;

export default StyledButton;
