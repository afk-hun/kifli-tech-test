import styled from "styled-components";
import { FlexContainer } from "../containers/FlexContainer";
import { Paragraph } from "../containers/Text";
import subscribeBig from "../../assets/image/subscribe-big.png";
import subscribeLittle from "../../assets/image/subscribe-little.png";
import { ButtonContainer } from "../containers/ButtonContainer";
import { BaseInputContainer } from "../containers/ImputContainer";
import { ComponentPropsWithoutRef, forwardRef, RefObject } from "react";

export const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    padding: ${({ theme }) => theme.breaks.newsletter.section.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    padding: ${({ theme }) => theme.breaks.newsletter.section.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    padding: ${({ theme }) => theme.breaks.newsletter.section.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    padding: ${({ theme }) => theme.breaks.newsletter.section.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    padding: ${({ theme }) => theme.breaks.newsletter.section.padding.XL};
  }
`;

export const Container = styled(FlexContainer)`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    padding: ${({ theme }) => theme.breaks.newsletter.container.padding.XS};
    max-width: ${({ theme }) => theme.breaks.newsletter.container.maxWidth.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    padding: ${({ theme }) => theme.breaks.newsletter.container.padding.S};
    max-width: ${({ theme }) => theme.breaks.newsletter.container.maxWidth.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    padding: ${({ theme }) => theme.breaks.newsletter.container.padding.M};
    max-width: ${({ theme }) => theme.breaks.newsletter.container.maxWidth.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    padding: ${({ theme }) => theme.breaks.newsletter.container.padding.L};
    max-width: ${({ theme }) => theme.breaks.newsletter.container.maxWidth.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    padding: ${({ theme }) => theme.breaks.newsletter.container.padding.XL};
    max-width: ${({ theme }) => theme.breaks.newsletter.container.maxWidth.XL};
  }
`;

export const ContentContainer = styled(FlexContainer)`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    background-image: url(${subscribeLittle});
    gap: ${({ theme }) => theme.breaks.newsletter.contentContainer.gap.XS};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.contentContainer.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    gap: ${({ theme }) => theme.breaks.newsletter.contentContainer.gap.S};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.contentContainer.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    background-image: url(${subscribeBig});
    gap: ${({ theme }) => theme.breaks.newsletter.contentContainer.gap.M};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.contentContainer.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    gap: ${({ theme }) => theme.breaks.newsletter.contentContainer.gap.L};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.contentContainer.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    gap: ${({ theme }) => theme.breaks.newsletter.contentContainer.gap.XL};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.contentContainer.padding.XL};
  }
`;

export const TextContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    gap: ${({ theme }) => theme.breaks.newsletter.textContainer.gap.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    gap: ${({ theme }) => theme.breaks.newsletter.textContainer.gap.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    max-width: ${({ theme }) =>
      theme.breaks.newsletter.textContainer.maxWidth.M};
    gap: ${({ theme }) => theme.breaks.newsletter.textContainer.gap.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    max-width: ${({ theme }) =>
      theme.breaks.newsletter.textContainer.maxWidth.L};
    gap: ${({ theme }) => theme.breaks.newsletter.textContainer.gap.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    max-width: ${({ theme }) =>
      theme.breaks.newsletter.textContainer.maxWidth.XL};
    gap: ${({ theme }) => theme.breaks.newsletter.textContainer.gap.XL};
  }
`;

export const Title = styled(Paragraph)`
  font-weight: 600;
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    color: #fff;
    font-size: ${({ theme }) => theme.breaks.newsletter.title.size.XS};
    line-height: ${({ theme }) => theme.breaks.newsletter.title.lineHeight.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.title.size.S};
    line-height: ${({ theme }) => theme.breaks.newsletter.title.lineHeight.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    color: #000;
    font-size: ${({ theme }) => theme.breaks.newsletter.title.size.M};
    line-height: ${({ theme }) => theme.breaks.newsletter.title.lineHeight.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.title.size.L};
    line-height: ${({ theme }) => theme.breaks.newsletter.title.lineHeight.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.title.size.XL};
    line-height: ${({ theme }) => theme.breaks.newsletter.title.lineHeight.XL};
  }
`;

export const Description = styled(Paragraph)`
  font-weight: 400;
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    color: #fff;
    font-size: ${({ theme }) => theme.breaks.newsletter.description.size.XS};
    line-height: ${({ theme }) =>
      theme.breaks.newsletter.description.lineHeight.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.description.size.S};
    line-height: ${({ theme }) =>
      theme.breaks.newsletter.description.lineHeight.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    color: #000;
    font-size: ${({ theme }) => theme.breaks.newsletter.description.size.M};
    line-height: ${({ theme }) =>
      theme.breaks.newsletter.description.lineHeight.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.description.size.L};
    line-height: ${({ theme }) =>
      theme.breaks.newsletter.description.lineHeight.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.description.size.XL};
    line-height: ${({ theme }) =>
      theme.breaks.newsletter.description.lineHeight.XL};
  }
`;

export const InputForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    gap: ${({ theme }) => theme.breaks.newsletter.inputForm.gap.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    gap: ${({ theme }) => theme.breaks.newsletter.inputForm.gap.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    gap: ${({ theme }) => theme.breaks.newsletter.inputForm.gap.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    gap: ${({ theme }) => theme.breaks.newsletter.inputForm.gap.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    gap: ${({ theme }) => theme.breaks.newsletter.inputForm.gap.XL};
  }
`;

export const Button = styled(ButtonContainer)`
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    width: ${({ theme }) => theme.breaks.newsletter.button.width.XS};
    height: ${({ theme }) => theme.breaks.newsletter.button.height.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    width: ${({ theme }) => theme.breaks.newsletter.button.width.S};
    height: ${({ theme }) => theme.breaks.newsletter.button.height.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    width: ${({ theme }) => theme.breaks.newsletter.button.width.M};
    height: ${({ theme }) => theme.breaks.newsletter.button.height.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    width: ${({ theme }) => theme.breaks.newsletter.button.width.L};
    height: ${({ theme }) => theme.breaks.newsletter.button.height.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    width: ${({ theme }) => theme.breaks.newsletter.button.width.XL};
    height: ${({ theme }) => theme.breaks.newsletter.button.height.XL};
  }
`;

type InputContainerProps = ComponentPropsWithoutRef<"div">;

export const InputContainer = styled(BaseInputContainer)<InputContainerProps>`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  cursor: text;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    width: 100%;
    max-width: ${({ theme }) =>
      theme.breaks.newsletter.inputContainer.width.XS};
    height: ${({ theme }) => theme.breaks.newsletter.inputContainer.height.XS};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.inputContainer.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    max-width: ${({ theme }) => theme.breaks.newsletter.inputContainer.width.S};
    height: ${({ theme }) => theme.breaks.newsletter.inputContainer.height.S};
    padding: ${({ theme }) => theme.breaks.newsletter.inputContainer.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    width: 0;
    max-width: ${({ theme }) => theme.breaks.newsletter.inputContainer.width.M};
    height: ${({ theme }) => theme.breaks.newsletter.inputContainer.height.M};
    padding: ${({ theme }) => theme.breaks.newsletter.inputContainer.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    max-width: ${({ theme }) => theme.breaks.newsletter.inputContainer.width.L};
    height: ${({ theme }) => theme.breaks.newsletter.inputContainer.height.L};
    padding: ${({ theme }) => theme.breaks.newsletter.inputContainer.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    max-width: ${({ theme }) =>
      theme.breaks.newsletter.inputContainer.width.XL};
    height: ${({ theme }) => theme.breaks.newsletter.inputContainer.height.XL};
    padding: ${({ theme }) =>
      theme.breaks.newsletter.inputContainer.padding.XL};
  }
`;

type InputProps = ComponentPropsWithoutRef<"input">;

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, inputRef) => {
    return (
      <InputContainer
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          (inputRef as RefObject<HTMLInputElement>)?.current?.focus();
        }}
      >
        <input
          onChange={props.onChange}
          className={props.className}
          ref={inputRef}
          placeholder={props.placeholder}
        />
      </InputContainer>
    );
  }
);

export const Input = styled(InputWithRef)<InputProps>`
  border: none;
  padding: 0;
  width: 100%;
  background-color: transparent;
  outline: none;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.input.fontSize.XS};
    height: ${({ theme }) => theme.breaks.newsletter.input.height.XS};
    line-height: ${({ theme }) => theme.breaks.newsletter.input.lineHeight.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.input.fontSize.S};
    height: ${({ theme }) => theme.breaks.newsletter.input.height.S};
    line-height: ${({ theme }) => theme.breaks.newsletter.input.lineHeight.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.input.fontSize.M};
    height: ${({ theme }) => theme.breaks.newsletter.input.height.M};
    line-height: ${({ theme }) => theme.breaks.newsletter.input.lineHeight.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.input.fontSize.L};
    height: ${({ theme }) => theme.breaks.newsletter.input.height.L};
    line-height: ${({ theme }) => theme.breaks.newsletter.input.lineHeight.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    font-size: ${({ theme }) => theme.breaks.newsletter.input.fontSize.XL};
    height: ${({ theme }) => theme.breaks.newsletter.input.height.XL};
    line-height: ${({ theme }) => theme.breaks.newsletter.input.lineHeight.XL};
  }
`;
