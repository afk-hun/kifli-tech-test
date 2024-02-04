import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

export type ParagraphProps = ComponentPropsWithoutRef<"p">;
export type SpanProps = ComponentPropsWithoutRef<"span">;

export const Paragraph = styled.p<ParagraphProps>`
  display: flex;
  justify-content: ${(props) => {
    return props.style?.justifyContent ? props.style?.justifyContent : "center";
  }};
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
`;

export const Span = styled.span<SpanProps>`
  display: flex;
  justify-content: ${(props) => {
    return props.style?.justifyContent ? props.style?.justifyContent : "center";
  }};
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
`;
