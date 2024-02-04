import { ComponentPropsWithoutRef, type ReactNode } from "react";
import {
  ButtonContainer,
  ButtonContainerProps,
} from "../containers/ButtonContainer";
import { Paragraph } from "../containers/Text";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
} & ButtonContainerProps;

export default function Button(props: ButtonProps) {
  const { children, variation, ...otherProps } = props;
  return (
    <ButtonContainer variation={variation || "primary"} {...otherProps}>
      <Paragraph>{children}</Paragraph>
    </ButtonContainer>
  );
}
