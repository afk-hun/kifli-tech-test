import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { ButtonContainer } from "../containers/ButtonContainer";
import { Span } from "../containers/Text";
import { ImageContainer } from "../containers/ImageContainer";

export type ImageButtonProps = {
  children: ReactNode;
  leftIconSrc?: string;
  rightIconSrc?: string;
} & ComponentPropsWithoutRef<"button">;

export function ImageButton(props: ImageButtonProps) {
  const { children, leftIconSrc, rightIconSrc, ...otherProps } = props;
  const { style, disabled, ...rest } = otherProps;
  return (
    <ButtonContainer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...rest}
      disabled={disabled}
    >
      {leftIconSrc && (
        <ImageContainer
          side={"left"}
          style={{ height: style?.height }}
          disabled={disabled}
        >
          <img
            src={leftIconSrc}
            style={{ width: "16px", height: "16px" }}
            alt={""}
          ></img>
        </ImageContainer>
      )}

      <Span style={{ width: "100%" }}>{children}</Span>

      {rightIconSrc && (
        <ImageContainer
          side={"right"}
          style={{ height: style?.height, width: style?.height }}
          disabled={disabled}
        >
          <img
            src={rightIconSrc}
            style={{ width: "16px", height: "16px" }}
            alt={""}
          ></img>
        </ImageContainer>
      )}
    </ButtonContainer>
  );
}
