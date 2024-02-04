import styled from "styled-components";

export const BaseInputContainer = styled.div`
  background-color: ${(props) => props.theme.light.input.background};
  border: 1px solid ${(props) => props.theme.light.input.border};
  color: ${(props) => props.theme.light.input.colorActive};
  border-radius: 8px;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.light.input.colorPlaceholder};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.light.input.borderHover};
  }

  &:active {
    outline: 3px solid ${(props) => props.theme.light.input.border};
  }

  &:focus :focus-visible {
    outline: 3px solid ${(props) => props.theme.light.input.border};
  }
  &:disabled {
    cursor: not-allowed;
    filter: none;
    background-color: ${(props) => props.theme.light.input.backgroundDisable};
    color: ${(props) => props.theme.light.input.colorDisabled};
    border: none;
  }
`;
