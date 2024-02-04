import { HTMLAttributes } from "react";
import styled from "styled-components";

export type Side = "left" | "right";
type ImageContainerProps = HTMLAttributes<HTMLDivElement> & {
  side: Side;
  disabled?: boolean;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  border-radius: ${(props) => {
    if (props.side === "left") {
      return "8px 0 0 8px";
    } else {
      return "0 8px 8px 0";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.dark.icon.background;
  }};

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    min-width: ${({ theme }) => theme.breaks.hero.imageButton.height.XS};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    min-width: ${({ theme }) => theme.breaks.hero.imageButton.height.S};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    min-width: ${({ theme }) => theme.breaks.hero.imageButton.height.M};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    min-width: ${({ theme }) => theme.breaks.hero.imageButton.height.L};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    min-width: ${({ theme }) => theme.breaks.hero.imageButton.height.XL};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.XL};
  }

  &:hover {
    background-color: ${(props) => props.theme.dark.icon.backgroundHover};
  }

  &:focus {
    background-color: ${(props) => props.theme.dark.icon.backgroundFocus};
  }

  &:active {
    background-color: ${(props) => props.theme.dark.icon.backgroundActive};
  }

  &:disabled {
    background-color: ${(props) => props.theme.dark.icon.backgroundDisable};
  }
`;
