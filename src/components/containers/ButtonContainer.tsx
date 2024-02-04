import styled from "styled-components";
import { UnstyledButton } from "../Unstyled";
import { ComponentPropsWithoutRef } from "react";

export type ButtonContainerProps = ComponentPropsWithoutRef<"button"> & {
  variation?: "primary" | "outlined" | "ghost";
  disabled?: boolean;
};

function isGhost(buttonContainerProps: ButtonContainerProps) {
  return buttonContainerProps!.variation === "ghost";
}

function isOutline(buttonContainerProps: ButtonContainerProps) {
  return buttonContainerProps!.variation === "outlined";
}

function isGhostOrOutlined(buttonContainerProps: ButtonContainerProps) {
  return isGhost(buttonContainerProps) || isOutline(buttonContainerProps);
}

export const ButtonContainer = styled(UnstyledButton)<ButtonContainerProps>`
  display: ${(props) => {
    return props.style?.display;
  }};
  align-items: ${(props) => props.style?.alignItems};
  justify-content: ${(props) => props.style?.justifyContent};
  background-color: ${(props) => {
    let variant = isGhostOrOutlined(props) ? "light" : "dark";
    return props.theme[variant].button.background;
  }};
  border: ${(props) => {
    if (isOutline(props)) {
      return `1px solid ${props.theme.light.button.border}`;
    } else {
      return "none";
    }
  }};
  color: ${(props) => {
    let variant = isGhostOrOutlined(props) ? "light" : "dark";
    return props.disabled
      ? props.theme[variant].text.disabled
      : props.theme[variant].text.enabled;
  }};

  &:hover {
    ${(props) => {
      if (isGhostOrOutlined(props)) {
        return `filter: drop-shadow(0 8px 24px ${props.theme.light.button.shadow});`;
      } else {
        return `filter: drop-shadow(0 8px 24px ${props.theme.light.button.shadow});
				background-color: ${props.theme.dark.button.backgroundHover}`;
      }
    }}
  }
  &:active {
    ${(props) => {
      let variant = isGhostOrOutlined(props) ? "light" : "dark";
      return `
          filter: none;
          background-color: ${props.theme[variant].button.backgroundActive};`;
    }}
  }
  &:focus:focus-visible {
    ${(props) => {
      let variant = isGhostOrOutlined(props) ? "light" : "dark";

      return `
          outline: 3px solid ${props.theme[variant].button.shadow};
        `;
    }}
  }
  &:disabled {
    ${(props) => {
      let variant = isGhostOrOutlined(props) ? "light" : "dark";

      return `
          cursor: not-allowed;
          filter: none;
          background-color: ${props.theme[variant].button.backgroundDisable};
          color: ${props.theme[variant].text.disabled};
          border-color: ${props.theme[variant].text.disabled};
        `;
    }}
  }
`;
