import styled from "styled-components";
import { FlexContainer } from "../containers/FlexContainer";
import heroBackground from "../../assets/image/hero-background.png";
import heroImage from "../../assets/image/hero.png";
import { Paragraph } from "../containers/Text";
import {
  ButtonContainerProps,
  ButtonContainer as CustomButton,
} from "../containers/ButtonContainer";
import {
  ImageButton as CustomImageButton,
  ImageButtonProps,
} from "../button/ImageButton";

export const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${heroBackground});
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    padding: ${({ theme }) => theme.breaks.hero.section.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    padding: ${({ theme }) => theme.breaks.hero.section.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    padding: ${({ theme }) => theme.breaks.hero.section.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    padding: ${({ theme }) => theme.breaks.hero.section.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    padding: ${({ theme }) => theme.breaks.hero.section.padding.XL};
  }
`;

export const Container = styled(FlexContainer)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    padding: ${({ theme }) => theme.breaks.hero.container.padding.XS};
    max-width: ${({ theme }) => theme.breaks.hero.container.maxWidth.XS};
    gap: ${({ theme }) => theme.breaks.hero.container.gap.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    padding: ${({ theme }) => theme.breaks.hero.container.padding.S};
    max-width: ${({ theme }) => theme.breaks.hero.container.maxWidth.S};
    gap: ${({ theme }) => theme.breaks.hero.container.gap.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    padding: ${({ theme }) => theme.breaks.hero.container.padding.M};
    max-width: ${({ theme }) => theme.breaks.hero.container.maxWidth.M};
    gap: ${({ theme }) => theme.breaks.hero.container.gap.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    padding: ${({ theme }) => theme.breaks.hero.container.padding.L};
    max-width: ${({ theme }) => theme.breaks.hero.container.maxWidth.L};
    gap: ${({ theme }) => theme.breaks.hero.container.gap.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    padding: ${({ theme }) => theme.breaks.hero.container.padding.XL};
    max-width: ${({ theme }) => theme.breaks.hero.container.maxWidth.XL};
    gap: ${({ theme }) => theme.breaks.hero.container.gap.XL};
  }
`;

export const ContentContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    gap: ${({ theme }) => theme.breaks.hero.contentContainer.gap.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    gap: ${({ theme }) => theme.breaks.hero.contentContainer.gap.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    gap: ${({ theme }) => theme.breaks.hero.contentContainer.gap.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    max-width: ${({ theme }) => theme.breaks.hero.contentContainer.maxWidth.L};
    gap: ${({ theme }) => theme.breaks.hero.contentContainer.gap.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    max-width: ${({ theme }) => theme.breaks.hero.contentContainer.maxWidth.XL};
    gap: ${({ theme }) => theme.breaks.hero.contentContainer.gap.XL};
  }
`;

export const Title = styled(Paragraph)`
  font-weight: 600;
  color: #272937;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    font-size: ${({ theme }) => theme.breaks.hero.title.size.XS};
    line-height: ${({ theme }) => theme.breaks.hero.title.lineHeight.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    font-size: ${({ theme }) => theme.breaks.hero.title.size.S};
    line-height: ${({ theme }) => theme.breaks.hero.title.lineHeight.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    color: #000;
    font-size: ${({ theme }) => theme.breaks.hero.title.size.M};
    line-height: ${({ theme }) => theme.breaks.hero.title.lineHeight.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    font-size: ${({ theme }) => theme.breaks.hero.title.size.L};
    line-height: ${({ theme }) => theme.breaks.hero.title.lineHeight.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    font-size: ${({ theme }) => theme.breaks.hero.title.size.XL};
    line-height: ${({ theme }) => theme.breaks.hero.title.lineHeight.XL};
  }
`;

export const Description = styled(Paragraph)`
  font-weight: 400;
  color: #272937;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    font-size: ${({ theme }) => theme.breaks.hero.description.size.XS};
    line-height: ${({ theme }) => theme.breaks.hero.description.lineHeight.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    font-size: ${({ theme }) => theme.breaks.hero.description.size.S};
    line-height: ${({ theme }) => theme.breaks.hero.description.lineHeight.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    font-size: ${({ theme }) => theme.breaks.hero.description.size.M};
    line-height: ${({ theme }) => theme.breaks.hero.description.lineHeight.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    font-size: ${({ theme }) => theme.breaks.hero.description.size.L};
    line-height: ${({ theme }) => theme.breaks.hero.description.lineHeight.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    font-size: ${({ theme }) => theme.breaks.hero.description.size.XL};
    line-height: ${({ theme }) => theme.breaks.hero.description.lineHeight.XL};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    gap: ${({ theme }) => theme.breaks.hero.buttonContainer.gap.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    gap: ${({ theme }) => theme.breaks.hero.buttonContainer.gap.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.breaks.hero.buttonContainer.gap.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    gap: ${({ theme }) => theme.breaks.hero.buttonContainer.gap.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    gap: ${({ theme }) => theme.breaks.hero.buttonContainer.gap.XL};
  }
`;

export const Button = styled(CustomButton)<ButtonContainerProps>`
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    width: ${({ theme }) => theme.breaks.hero.button.width.XS};
    height: ${({ theme }) => theme.breaks.hero.button.height.XS};
    font-size: ${({ theme }) => theme.breaks.hero.button.size.XS};
    line-height: ${({ theme }) => theme.breaks.hero.button.lineHeight.XS};
    padding: ${({ theme }) => theme.breaks.hero.button.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    width: ${({ theme }) => theme.breaks.hero.button.width.S};
    height: ${({ theme }) => theme.breaks.hero.button.height.S};
    font-size: ${({ theme }) => theme.breaks.hero.button.size.S};
    line-height: ${({ theme }) => theme.breaks.hero.button.lineHeight.S};
    padding: ${({ theme }) => theme.breaks.hero.button.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    width: ${({ theme }) => theme.breaks.hero.button.width.M};
    height: ${({ theme }) => theme.breaks.hero.button.height.M};
    font-size: ${({ theme }) => theme.breaks.hero.button.size.M};
    line-height: ${({ theme }) => theme.breaks.hero.button.lineHeight.M};
    padding: ${({ theme }) => theme.breaks.hero.button.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    width: ${({ theme }) => theme.breaks.hero.button.width.L};
    height: ${({ theme }) => theme.breaks.hero.button.height.L};
    font-size: ${({ theme }) => theme.breaks.hero.button.size.L};
    line-height: ${({ theme }) => theme.breaks.hero.button.lineHeight.L};
    padding: ${({ theme }) => theme.breaks.hero.button.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    width: ${({ theme }) => theme.breaks.hero.button.width.XL};
    height: ${({ theme }) => theme.breaks.hero.button.height.XL};
    font-size: ${({ theme }) => theme.breaks.hero.button.size.XL};
    line-height: ${({ theme }) => theme.breaks.hero.button.lineHeight.XL};
    padding: ${({ theme }) => theme.breaks.hero.button.padding.XL};
  }
`;

export const ImageButton = styled(CustomImageButton)<ImageButtonProps>`
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XS}) {
    width: ${({ theme }) => theme.breaks.hero.imageButton.width.XS};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.XS};
    font-size: ${({ theme }) => theme.breaks.hero.imageButton.size.XS};
    line-height: ${({ theme }) => theme.breaks.hero.imageButton.lineHeight.XS};
    //padding: ${({ theme }) => theme.breaks.hero.imageButton.padding.XS};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.S}) {
    width: ${({ theme }) => theme.breaks.hero.imageButton.width.S};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.S};
    font-size: ${({ theme }) => theme.breaks.hero.imageButton.size.S};
    line-height: ${({ theme }) => theme.breaks.hero.imageButton.lineHeight.S};
    //padding: ${({ theme }) => theme.breaks.hero.imageButton.padding.S};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.M}) {
    width: ${({ theme }) => theme.breaks.hero.imageButton.width.M};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.M};
    font-size: ${({ theme }) => theme.breaks.hero.imageButton.size.M};
    line-height: ${({ theme }) => theme.breaks.hero.imageButton.lineHeight.M};
    //padding: ${({ theme }) => theme.breaks.hero.imageButton.padding.M};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.L}) {
    width: ${({ theme }) => theme.breaks.hero.imageButton.width.L};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.L};
    font-size: ${({ theme }) => theme.breaks.hero.imageButton.size.L};
    line-height: ${({ theme }) => theme.breaks.hero.imageButton.lineHeight.L};
    //padding: ${({ theme }) => theme.breaks.hero.imageButton.padding.L};
  }
  @media (min-width: ${({ theme }) => theme.breaks.mediaPoints.XL}) {
    width: ${({ theme }) => theme.breaks.hero.imageButton.width.XL};
    height: ${({ theme }) => theme.breaks.hero.imageButton.height.XL};
    font-size: ${({ theme }) => theme.breaks.hero.imageButton.size.XL};
    line-height: ${({ theme }) => theme.breaks.hero.imageButton.lineHeight.XL};
    //padding: ${({ theme }) => theme.breaks.hero.imageButton.padding.XL};
  }
`;

export const HeroImage = styled.img`
  content: url(${heroImage});
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
